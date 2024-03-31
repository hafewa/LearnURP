#version 450
uniform vec4 _Time;
layout(std140, binding = 0) uniform UnityPerDraw{
  vec4 hlslcc_mtx4x4unity_ObjectToWorld[4];
  vec4 hlslcc_mtx4x4unity_WorldToObject[4];
  vec4 Xhlslcc_UnusedXhlslcc_mtx4x4unity_MatrixMV[4];
  vec4 hlslcc_mtx4x4unity_MatrixMVP[4];
  vec4 Xhlslcc_UnusedXunity_WorldTransformParams;
  vec4 Xhlslcc_UnusedXunity_RenderingLayer;
  vec4 Xhlslcc_UnusedXunity_LightData;
  vec4 Xhlslcc_UnusedXunity_LightIndices[2];
  vec4 Xhlslcc_UnusedXunity_ProbesOcclusion;
  vec4 Xhlslcc_UnusedXunity_SpecCube0_HDR;
  vec4 Xhlslcc_UnusedXunity_SpecCube1_HDR;
  vec4 Xhlslcc_UnusedXunity_LightmapST;
  vec4 Xhlslcc_UnusedXunity_DynamicLightmapST;
  vec4 Xhlslcc_UnusedXunity_SHAr;
  vec4 Xhlslcc_UnusedXunity_SHAg;
  vec4 Xhlslcc_UnusedXunity_SHAb;
  vec4 Xhlslcc_UnusedXunity_SHBr;
  vec4 Xhlslcc_UnusedXunity_SHBg;
  vec4 Xhlslcc_UnusedXunity_SHBb;
  vec4 Xhlslcc_UnusedXunity_SHC;
  vec4 Xhlslcc_UnusedXhlslcc_mtx4x4unity_MatrixPreviousM[4];
  vec4 Xhlslcc_UnusedXhlslcc_mtx4x4unity_MatrixPreviousMI[4];
  vec4 Xhlslcc_UnusedXunity_MotionVectorsParams;
};
layout(std140, binding = 1) uniform UnityPerMaterial{
  vec4 _BaseTex_ST;
  vec4 _BottomTex_ST;
  vec4 _LightTex_ST;
  vec4 _BaseColor;
  vec4 _BottomColor;
  vec4 _LightColor;
  vec4 _RimColor;
  vec4 _MainSpeed;
  float _ReflectWeight;
  float _LightIntensity;
  float _LightPower;
  float _LightOffset;
  float _ViewOffset;
  float _RimRange;
  float Xhlslcc_UnusedX_Tortuosity;
  float _BottomCorrection;
  float _AdditionalReflectionCubeMip;
  vec4 _AdditionalReflectionColor;
  float _AddtionalReflactionAlpha;
  float _Angle;
};
layout(location = 0) uniform samplerCube _AdditionalReflectionCube;
layout(location = 1) uniform sampler2D _ReflectionColor;
layout(location = 2) uniform sampler2D _BaseTex;
layout(location = 3) uniform sampler2D _BottomTex;
layout(location = 4) uniform sampler2D _LightTex;
in vec3 vs_TEXCOORD3;
in vec3 vs_TEXCOORD2;
in vec2 vs_TEXCOORD1;
in vec4 vs_TEXCOORD0;
in vec4 vs_TEXCOORD4;
layout(location = 0) out vec4 SV_Target0;
vec4 u_xlat0;
vec4 u_xlat16_0;
vec3 u_xlat1;
vec3 u_xlat16_1;
vec3 u_xlat16_2;
vec3 u_xlat16_3;
vec3 u_xlat16_4;
vec3 u_xlat5;
vec3 u_xlat16_5;
float u_xlat6;
vec3 u_xlat7;
vec2 u_xlat16_9;
vec2 u_xlat13;
float u_xlat16_14;
float u_xlat18;
float u_xlat16_20;
void main(){
vec3 debugColor = vec3(1.0, 0.0, 0.0);

  (u_xlat0.x = dot(vs_TEXCOORD3.xyz, vs_TEXCOORD3.xyz));
  (u_xlat0.x = inversesqrt(u_xlat0.x));
  (u_xlat0.xyz = (u_xlat0.xxx * vs_TEXCOORD3.xyz));
  (u_xlat1.xyz = (u_xlat0.yyy * hlslcc_mtx4x4unity_WorldToObject[1].xyz));
  (u_xlat1.xyz = ((hlslcc_mtx4x4unity_WorldToObject[0].xyz * u_xlat0.xxx) + u_xlat1.xyz));
  (u_xlat1.xyz = ((hlslcc_mtx4x4unity_WorldToObject[2].xyz * u_xlat0.zzz) + u_xlat1.xyz));
  (u_xlat18 = dot(u_xlat1.xyz, u_xlat1.xyz));
  (u_xlat18 = inversesqrt(u_xlat18));
  (u_xlat1.xyz = (vec3(u_xlat18) * u_xlat1.xyz));

  (u_xlat16_2.xyz = ((u_xlat1.yyy * vec3(-0.0, -2.0, -0.0)) + u_xlat1.xyz));
  (u_xlat16_3.x = sin(_Angle));
  (u_xlat16_4.x = cos(_Angle));
  (u_xlat16_9.xy = (u_xlat16_2.xz * u_xlat16_4.xx));
  (u_xlat16_4.x = ((u_xlat16_3.x * u_xlat16_2.z) + u_xlat16_9.x));
  (u_xlat16_14 = sin((-_Angle)));
  (u_xlat16_4.z = ((u_xlat16_14 * u_xlat16_2.x) + u_xlat16_9.y));
  (u_xlat16_4.y = u_xlat16_2.y);


  (u_xlat16_1.xyz = textureLod(_AdditionalReflectionCube, u_xlat16_4.xyz, _AdditionalReflectionCubeMip).xyz);
//addReflectionColor
  (u_xlat16_2.xyz = (u_xlat16_1.xyz * _AdditionalReflectionColor.xyz));
// debugColor.xyz = u_xlat16_1.xyz;

  (u_xlat18 = dot(vs_TEXCOORD2.xyz, vs_TEXCOORD2.xyz));
  (u_xlat18 = inversesqrt(u_xlat18));
  (u_xlat1.xyz = (vec3(u_xlat18) * vs_TEXCOORD2.xyz));
  (u_xlat6 = dot(u_xlat1.xyz, u_xlat0.xyz));
  (u_xlat6 = ((-u_xlat6) + 1.0));
  (u_xlat6 = max(u_xlat6, 9.9999997e-05));
  (u_xlat6 = log2(u_xlat6));
  (u_xlat6 = (u_xlat6 * _RimRange));
  (u_xlat6 = exp2(u_xlat6));
  (u_xlat1.xy = ((vs_TEXCOORD1.xy * _BottomTex_ST.xy) + _BottomTex_ST.zw));
  (u_xlat13.xy = (_Time.yy * _MainSpeed.xy));
  (u_xlat1.xy = ((u_xlat13.xy * vec2(vec2(_BottomCorrection, _BottomCorrection))) + u_xlat1.xy));
  (u_xlat0.xz = ((u_xlat0.xz * vec2(_ViewOffset)) + u_xlat1.xy));
  (u_xlat16_0.xzw = texture(_BottomTex, u_xlat0.xz).xyz);
  (u_xlat1.xy = ((vs_TEXCOORD1.xy * _BaseTex_ST.xy) + _BaseTex_ST.zw));
  (u_xlat16_1.xyz = texture(_BaseTex, u_xlat1.xy).xzw);
// debugColor = u_xlat16_1.zzz;

  (u_xlat0.xzw = (u_xlat16_0.xzw * u_xlat16_1.yyy));
  (u_xlat16_3.xyz = (u_xlat0.xzw * _BottomColor.xyz));
  (u_xlat0.xzw = (((-u_xlat0.xzw) * _BottomColor.xyz) + _RimColor.xyz));
  (u_xlat0.xyz = ((vec3(u_xlat6) * u_xlat0.xzw) + u_xlat16_3.xyz));
  (u_xlat7.xz = (vs_TEXCOORD1.xy + vec2(-0.5, -0.5)));
  (u_xlat18 = dot((-u_xlat7.xz), (-u_xlat7.xz)));
  (u_xlat18 = sqrt(u_xlat18));
  (u_xlat18 = ((u_xlat18 * 2.0) + 0.30000001));
  (u_xlat18 = min(u_xlat18, 1.0));
  (u_xlat18 = ((-u_xlat18) + 1.0));
  (u_xlat16_20 = (u_xlat18 * _ReflectWeight));
  (u_xlat5.xy = (vs_TEXCOORD0.xy / vs_TEXCOORD0.ww));
  (u_xlat5.z = ((-u_xlat5.x) + 1.0));
  (u_xlat16_5.xyz = texture(_ReflectionColor, u_xlat5.zy).xyz);

// blend color
  (u_xlat16_3.xyz = ((vec3(u_xlat16_20) * u_xlat16_5.xyz) + u_xlat0.xyz));
  (u_xlat16_3.xyz = ((u_xlat16_1.xxx * _BaseColor.xyz) + u_xlat16_3.xyz));


  (u_xlat16_20 = (u_xlat16_1.z * _BaseColor.w));
  (SV_Target0.w = (u_xlat16_20 * vs_TEXCOORD4.w));
  (u_xlat16_2.xyz = ((u_xlat16_3.xyz * u_xlat16_2.xyz) + (-u_xlat16_3.xyz)));

// debugColor = u_xlat16_2.xyz;


  (u_xlat16_2.xyz = ((vec3(_AddtionalReflactionAlpha) * u_xlat16_2.xyz) + u_xlat16_3.xyz));

  (u_xlat0.xy = ((vs_TEXCOORD1.xy * _LightTex_ST.xy) + _LightTex_ST.zw));
  (u_xlat16_0.x = texture(_LightTex, u_xlat0.xy).x);
debugColor.xy = vs_TEXCOORD1.xy;


  (u_xlat16_20 = log2(u_xlat16_0.x));
  (u_xlat16_20 = (u_xlat16_20 * _LightPower));
  (u_xlat16_20 = exp2(u_xlat16_20));


  (u_xlat16_20 = (u_xlat16_20 * _LightColor.x));
  (u_xlat16_20 = ((u_xlat16_20 * _LightIntensity) + _LightOffset));
  (u_xlat16_20 = clamp(u_xlat16_20, 0.0, 1.0));
  (SV_Target0.xyz = (vec3(u_xlat16_20) * u_xlat16_2.xyz));

  SV_Target0.xyz = debugColor;
  return ;
}
