// Calliope edition: trigonometric and hyperbolic functions in single precision. pxt links
// every Math function into the runtime, whether a game uses it or not, and the double
// versions from newlib's libm are large (argument reduction tables etc.). Defining the double
// functions here makes the linker take these instead of libm's (archive members are only
// pulled in for undefined symbols): about 7 KB less flash, and faster, because the nRF52833's
// FPU computes float in hardware. Results are accurate to ~7 digits instead of ~15, which is
// plenty for angles and movement in games; the simulator keeps computing in double.
// Math.pow/exp/log/sqrt and rounding stay double, so integer results remain exact.
#include <math.h>

extern "C" {
double sin(double x) { return sinf((float)x); }
double cos(double x) { return cosf((float)x); }
double tan(double x) { return tanf((float)x); }
double asin(double x) { return asinf((float)x); }
double acos(double x) { return acosf((float)x); }
double atan(double x) { return atanf((float)x); }
double atan2(double y, double x) { return atan2f((float)y, (float)x); }
double sinh(double x) { return sinhf((float)x); }
double cosh(double x) { return coshf((float)x); }
double tanh(double x) { return tanhf((float)x); }
double asinh(double x) { return asinhf((float)x); }
double acosh(double x) { return acoshf((float)x); }
double atanh(double x) { return atanhf((float)x); }
}
