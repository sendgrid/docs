# Longest coding programs!
```c
#include <stdlib.h>
#include <stdarg.h>
#include <string.h>
// Exercise the symbol table mechanism of the compiler in an effort to
// take a unreasonable about of time compiling

#define PTR(T) T*
#define CONST(T) T const
#define FUNC(NAME,RTYPE,ARG) RTYPE NAME(ARG)
#define FPTR(NAME,RTYPE,ARG) FUNC((*NAME),RTYPE,ARG)

// Forward decalration of repeated OO method pointers
typedef void* (*cctor_ptr)(void*this, void*that, ...);
typedef void* (*dtor_ptr)(void*this);

// Assumes three var-args: sizeof(payload type), cctor, dtor
void* default_ctor(void*this, ...){
  // Pull in variadac bits
  va_list list;
  va_start(list,this);
  int size=va_arg(list,int);
  cctor_ptr cctor=va_arg(list,cctor_ptr);
  dtor_ptr dtor=va_arg(list,dtor_ptr);
  va_end(list);
  // process
  if (!this) this = malloc(size);
  if (this) {
    memset(this,size,0);
    /* various dodges to install the cctor and dtor in the write places */
  }
  return this;
}
// Copies the payload from that to this; 
void* default_cctor(void*restrict this, void* restrict that, ...){
  // Pull in variadac bits
  va_list list;
  va_start(list,that);
  int size=va_arg(list,int);
  cctor_ptr cctor=va_arg(list,cctor_ptr);
  dtor_ptr dtor=va_arg(list,dtor_ptr);
  va_end(list);
  // process
  if (!this) this = malloc(size);
  if (this) {
    memcpy(this,that,size);
    /* various dodges to install the cctor and dtor in the write places */
  }
  return this;
}
// Assumes that his was allocated with malloc, does not use varargs
void* default_dtor(void*this, ...){
  free(this); 
  return NULL;
};

#define DECLARE_STRUCT(N) struct S##N##_s
#define TYPEDEF_ACCESSOR(N,T) typedef FPTR(f##N##_ptr,CONST(PTR(T)),PTR(CONST(struct S##N##_s)))
#define TYPEDEF_STRUCT(N,T) typedef struct S##N##_s {PTR(T)p; cctor_ptr cctor; dtor_ptr dtor; f##N##_ptr f##N;} S##N
#define OO_STRUCT(N,T) DECLARE_STRUCT(N); TYPEDEF_ACCESSOR(N,T); TYPEDEF_STRUCT(N,T)

OO_STRUCT(1,char);
OO_STRUCT(2,int);
OO_STRUCT(3,double*);
OO_STRUCT(4,S3);
OO_STRUCT(5,S4);
OO_STRUCT(6,S5);
OO_STRUCT(7,S6);
OO_STRUCT(8,S7);

#define SUBSCOPE(A) { \
    S1*A##1=default_ctor(NULL,sizeof(char),default_cctor,default_dtor); \
    S2 A##2; default_ctor(&A##2,sizeof(int),default_cctor,default_dtor); \
    S2*A##3=default_ctor(NULL,sizeof(double*),default_cctor,default_dtor); \
    S8 A##5; default_ctor(&A##5,sizeof(S4),default_cctor,default_dtor); \
    S6 A##6; default_ctor(&A##6,sizeof(S5),default_cctor,default_dtor); \
    S8*A##8=default_ctor(NULL,sizeof(S7),default_cctor,default_dtor); \
  }
#define SUBSCOPE2(A,B)  { \
    S2*B##5=default_ctor(NULL,sizeof(S4),default_cctor,default_dtor); \
    S4 A##7; default_ctor(&A##7,sizeof(S6),default_cctor,default_dtor); \
    SUBSCOPE(A) SUBSCOPE(B);                 \
  }
#define SUBSCOPE6(A,B,C)  { \
    S2*A##3=default_ctor(NULL,sizeof(double*),default_cctor,default_dtor); \
    S2 B##2; default_ctor(&B##2,sizeof(int),default_cctor,default_dtor); \
    S4*C##4=NULL;                           \
    SUBSCOPE2(A,C) SUBSCOPE2(B,C) SUBSCOPE2(A,B); \
  }
#define SUBSCOPE24(A,B,C,D) { \
    S1*D##1=default_ctor(NULL,sizeof(char),default_cctor,default_dtor); \
    S2 C##2; default_ctor(&C##2,sizeof(int),default_cctor,default_dtor); \
    S2*B##3=default_ctor(NULL,sizeof(double*),default_cctor,default_dtor); \
    S4 A##4; default_ctor(&A##4,sizeof(S3),default_cctor,default_dtor); \
    SUBSCOPE6(A,B,C) SUBSCOPE6(A,B,D) SUBSCOPE6(A,C,D) SUBSCOPE6(B,C,D); \
  }
#define SUBSCOPE120(A,B,C,D,E) { \
    S5*A##5=default_ctor(NULL,sizeof(S4),default_cctor,default_dtor); \
    S6*A##6=default_ctor(NULL,sizeof(S5),default_cctor,default_dtor); \
    S8 A##8; default_ctor(&A##8,sizeof(S7),default_cctor,default_dtor); \
    SUBSCOPE24(A,B,C,D) SUBSCOPE24(A,B,C,E) SUBSCOPE24(A,B,D,E); \
    SUBSCOPE24(A,C,D,E) SUBSCOPE24(B,C,D,E); \
  }
#define SUBSCOPE720(A,B,C,D,E,F) { \
    S5 A##5; default_ctor(&A##5,sizeof(S4),default_cctor,default_dtor); \
    S6 A##6; default_ctor(&A##6,sizeof(S5),default_cctor,default_dtor); \
    S8*A##8=default_ctor(NULL,sizeof(S7),default_cctor,default_dtor); \
    SUBSCOPE120(A,B,C,D,E) SUBSCOPE120(A,B,C,D,F) SUBSCOPE120(A,B,C,E,F); \
    SUBSCOPE120(A,B,D,E,F) SUBSCOPE120(A,C,D,E,F) SUBSCOPE120(B,C,D,E,F); \
  }

int main(){
  S4 s4;
  SUBSCOPE720(A,B,C,D,E,F)
}
```
Compile time on my machine is in excess of 4 seconds with -O3 and more than 1 second with no optimization.
