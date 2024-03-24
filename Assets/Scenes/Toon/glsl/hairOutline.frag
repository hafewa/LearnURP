#version 450
uniform vec3 _WorldSpaceCameraPos;
uniform float _OneMinusGlobalMainIntensity;
uniform float _ES_TransitionRate;
uniform vec4 hlslcc_mtx4x4_ES_GlobalRotMatrix[4];
uniform float _ES_FogColor;
uniform float _ES_FogDensity;
uniform float _ES_FogNear;
uniform float _ES_FogFar;
uniform float _ES_HeightFogColor;
uniform float _ES_HeightFogBaseHeight;
uniform float _ES_HeightFogRange;
uniform float _ES_HeightFogDensity;
uniform float _ES_HeightFogFogNear;
uniform float _ES_HeightFogFogFar;
uniform float _ES_FogCharacterNearFactor;
uniform float _ES_HeightFogAddAjust;
uniform float _GlobalOneMinusAvatarIntensity;
uniform float _GlobalOneMinusAvatarIntensityEnable;
uniform float _OneMinusGlobalMainIntensityEnable;
layout(std140, binding = 0) uniform UnityPerMaterial{
  vec3 Xhlslcc_UnusedX_CharaWorldSpaceOffset;
  float Xhlslcc_UnusedX_DisableWorldSpaceGradient;
  vec4 Xhlslcc_UnusedX_Color;
  vec4 Xhlslcc_UnusedX_BackColor;
  vec4 Xhlslcc_UnusedX_MainTex_ST;
  vec4 Xhlslcc_UnusedX_EyeShadowColor;
  vec4 Xhlslcc_UnusedX_BrightDiffuseColor;
  vec4 Xhlslcc_UnusedX_ShadowDiffuseColor;
  vec4 Xhlslcc_UnusedX_SpecularColor0;
  float Xhlslcc_UnusedX_IsMonster;
  float Xhlslcc_UnusedX_AlphaCutoff;
  float Xhlslcc_UnusedX_NormalScale;
  float Xhlslcc_UnusedX_ShadowThreshold;
  float Xhlslcc_UnusedX_ShadowFeather;
  float Xhlslcc_UnusedX_SpecularShininess;
  float Xhlslcc_UnusedX_SpecularShininess0;
  float Xhlslcc_UnusedX_SpecularIntensity;
  float Xhlslcc_UnusedX_SpecularIntensity0;
  float Xhlslcc_UnusedX_SpecularRoughness0;
  float Xhlslcc_UnusedX_SpecularThreshold;
  float Xhlslcc_UnusedX_SpecularShadowOffset;
  float Xhlslcc_UnusedX_SpecularShadowIntensity;
  float Xhlslcc_UnusedX_ExMapThreshold;
  float Xhlslcc_UnusedX_ExSpecularIntensity;
  float Xhlslcc_UnusedX_ExCheekIntensity;
  float Xhlslcc_UnusedX_ExShyIntensity;
  float Xhlslcc_UnusedX_ExShadowIntensity;
  vec4 Xhlslcc_UnusedX_ExCheekColor;
  vec4 Xhlslcc_UnusedX_ExShyColor;
  vec4 Xhlslcc_UnusedX_ExShadowColor;
  vec4 Xhlslcc_UnusedX_ExEyeColor;
  float Xhlslcc_UnusedX_HairBlendWeight;
  float Xhlslcc_UnusedX_HairBlendOffset;
  float Xhlslcc_UnusedX_EyeEffectProcs;
  float Xhlslcc_UnusedX_EyeEffectPower;
  vec4 Xhlslcc_UnusedX_EyeEffectColor;
  float Xhlslcc_UnusedX_EyeEffectDarken;
  float Xhlslcc_UnusedX_EmissionThreshold;
  float Xhlslcc_UnusedX_EmissionIntensity;
  float Xhlslcc_UnusedX_NoseLinePower;
  vec4 Xhlslcc_UnusedX_NoseLineColor;
  int _ShowPartID;
  vec4 Xhlslcc_UnusedX_OutlineColor;
  vec4 _OutlineColor0;
  float _OutlineWidth;
  float _OneMinusCharacterOutlineWidthScale;
  float Xhlslcc_UnusedX_FixLipOutline;
  float Xhlslcc_UnusedX_OutlineColorIntensity;
  int Xhlslcc_UnusedX_UsingDitherAlpha;
  float Xhlslcc_UnusedX_DitherAlpha;
  float Xhlslcc_UnusedX_DissolveRate;
  vec4 Xhlslcc_UnusedX_DissolveUVSpeed;
  vec4 Xhlslcc_UnusedX_DissolveOutlineColor1;
  vec4 Xhlslcc_UnusedX_DissolveOutlineColor2;
  float Xhlslcc_UnusedX_DissolveDistortionIntensity;
  float Xhlslcc_UnusedX_DissolveOutlineSize1;
  float Xhlslcc_UnusedX_DissolveOutlineSize2;
  float Xhlslcc_UnusedX_DissolveOutlineOffset;
  float Xhlslcc_UnusedX_DissoveDirecMask;
  float Xhlslcc_UnusedX_DissolveMapAdd;
  float Xhlslcc_UnusedX_DissolveUV;
  vec4 Xhlslcc_UnusedX_DissolveOutlineSmoothStep;
  vec4 Xhlslcc_UnusedX_DissolveST;
  vec4 Xhlslcc_UnusedX_DistortionST;
  vec4 Xhlslcc_UnusedX_DissolveMap_ST;
  vec4 Xhlslcc_UnusedX_DissolveComponent;
  vec4 Xhlslcc_UnusedX_DissolveDiretcionXYZ;
  vec4 Xhlslcc_UnusedX_DissolveCenter;
  vec4 Xhlslcc_UnusedX_DissolvePosMaskPos;
  vec4 Xhlslcc_UnusedX_DissolvePosMaskRootOffset;
  float Xhlslcc_UnusedX_DissolvePosMaskWorldON;
  float Xhlslcc_UnusedX_DissolveUseDirection;
  float Xhlslcc_UnusedX_DissolvePosMaskFilpOn;
  float Xhlslcc_UnusedX_DissolvePosMaskOn;
  float Xhlslcc_UnusedX_DissolvePosMaskGlobalOn;
  float Xhlslcc_UnusedX_DissoveON;
  float Xhlslcc_UnusedX_RimEdge;
  float Xhlslcc_UnusedX_RimFeatherWidth;
  float Xhlslcc_UnusedX_RimLightMode;
  vec4 Xhlslcc_UnusedX_RimColor;
  vec4 Xhlslcc_UnusedX_RimOffset;
  vec4 Xhlslcc_UnusedX_RimColor0;
  float Xhlslcc_UnusedX_Rimintensity;
  float Xhlslcc_UnusedX_RimWidth;
  float Xhlslcc_UnusedX_RimWidth0;
  float Xhlslcc_UnusedX_CustomColor;
  vec4 Xhlslcc_UnusedX_CustomColor0;
  vec4 Xhlslcc_UnusedX_CustomColor1;
  vec4 Xhlslcc_UnusedX_CustomColor2;
  vec4 Xhlslcc_UnusedX_CustomColor3;
  vec4 Xhlslcc_UnusedX_CustomColor4;
  vec4 Xhlslcc_UnusedX_CustomColor5;
  vec4 Xhlslcc_UnusedX_CustomColor6;
  vec4 Xhlslcc_UnusedX_CustomColor7;
  vec4 Xhlslcc_UnusedX_CustomColor8;
  vec4 Xhlslcc_UnusedX_CustomColor9;
  vec4 Xhlslcc_UnusedX_CustomColor10;
  vec4 Xhlslcc_UnusedX_CustomColor11;
  vec4 Xhlslcc_UnusedX_CustomColor12;
  vec4 Xhlslcc_UnusedX_CustomColor13;
  vec4 Xhlslcc_UnusedX_CustomSkinColor;
  vec4 Xhlslcc_UnusedX_CustomSkinColor1;
  vec4 Xhlslcc_UnusedX_CustomSkinLineColor;
  vec4 Xhlslcc_UnusedX_CustomBeardColor;
  vec4 Xhlslcc_UnusedX_CustomBeardColor1;
  vec4 Xhlslcc_UnusedX_CustomEyeBallColor;
  vec4 Xhlslcc_UnusedX_CustomEyeBallColor1;
  vec4 Xhlslcc_UnusedX_CustomEyeBallColor2;
  vec4 Xhlslcc_UnusedX_CustomEyeBaseColor;
  vec4 Xhlslcc_UnusedX_CustomSkinLightColor;
  vec4 Xhlslcc_UnusedX_CustomSkinDarkColor;
  vec4 Xhlslcc_UnusedX_CustomEyeDarkColor;
  vec4 Xhlslcc_UnusedX_CustomHairLightColor;
  vec4 Xhlslcc_UnusedX_CustomHairDarkColor;
  vec4 Xhlslcc_UnusedX_CustomHairLineColor;
  vec4 Xhlslcc_UnusedX_CustomDecorateDarkColor;
  vec4 Xhlslcc_UnusedX_CustomDecorateLightColor;
  vec4 Xhlslcc_UnusedX_CustomFurLightColor;
  vec4 Xhlslcc_UnusedX_CustomFurDarkColor;
  vec4 Xhlslcc_UnusedX_CustomFurInLightColor;
  vec4 Xhlslcc_UnusedX_CustomFurInDarkColor;
  float Xhlslcc_UnusedX_CustomEyeBallColor2Range;
  int _HideCharaParts;
  int _HideNPCParts;
  float Xhlslcc_UnusedX_RimIntensityDark;
  float Xhlslcc_UnusedX_WithFur;
  float Xhlslcc_UnusedX_FresnelColorStrength;
  vec4 Xhlslcc_UnusedX_FresnelColor;
  vec4 Xhlslcc_UnusedX_FresnelBSI;
  float Xhlslcc_UnusedX_EnableAlphaCutoff;
  float Xhlslcc_UnusedX_mBloomIntensity0;
  float Xhlslcc_UnusedX_mBloomIntensity1;
  float Xhlslcc_UnusedX_mBloomIntensity;
  vec4 Xhlslcc_UnusedX_mBloomColor0;
  float Xhlslcc_UnusedX_CustomsizedFace;
  vec4 Xhlslcc_UnusedX_InstaceProbeUV;
};
layout(location = 0) uniform sampler2D _ES_GradientAtlas;
in vec3 vs_TEXCOORD6;
layout(location = 0) out vec4 SV_Target0;
layout(location = 1) out vec4 SV_Target1;
layout(location = 2) out float SV_Target2;
vec4 u_xlat16_0;
bool u_xlatb0;
vec4 u_xlat16_1;
vec3 u_xlat16_2;
vec3 u_xlat3;
vec3 u_xlat16_3;
vec3 u_xlat16_4;
vec3 u_xlat16_5;
vec3 u_xlat16_6;
vec3 u_xlat16_7;
vec3 u_xlat16_8;
float u_xlat16_10;
vec2 u_xlat16_19;
float u_xlat16_28;
float u_xlat16_29;
void main(){
    vec3 debugColor = vec3(1.0, 0.0, 0.0);

  (u_xlatb0 = (0.0 < _ES_HeightFogRange));
  (u_xlat16_1.x = dot(vs_TEXCOORD6.xyz, hlslcc_mtx4x4_ES_GlobalRotMatrix[3].xyz));
  (u_xlat16_1.x = (u_xlat16_1.x + (-hlslcc_mtx4x4_ES_GlobalRotMatrix[3].w)));
  (u_xlat16_10 = (u_xlat16_1.x + (-_ES_HeightFogBaseHeight)));
  (u_xlat16_1.x = ((-u_xlat16_1.x) + _ES_HeightFogBaseHeight));
  (u_xlat16_1.x = ((u_xlatb0) ? (u_xlat16_10) : (u_xlat16_1.x)));
  (u_xlat16_1.x = max(u_xlat16_1.x, 0.0));
  (u_xlat16_10 = (abs(_ES_HeightFogRange) + 1.0));
  (u_xlat16_1.x = (u_xlat16_1.x / u_xlat16_10));
  (u_xlat16_1.x = min(u_xlat16_1.x, 1.0));
  (u_xlat16_1.x = ((-u_xlat16_1.x) + 1.0));
  (u_xlat16_10 = ((u_xlat16_1.x * _ES_HeightFogDensity) + -1.0));
  (u_xlat16_10 = clamp(u_xlat16_10, 0.0, 1.0));
  (u_xlat16_2.x = _ES_FogFar);
  (u_xlat16_2.y = _ES_HeightFogFogFar);
  (u_xlat16_0.xz = vec2(_ES_FogNear, _ES_FogDensity));
  (u_xlat16_0.yw = vec2(_ES_HeightFogFogNear, _ES_HeightFogDensity));
  (u_xlat16_19.xy = ((-u_xlat16_0.xy) + u_xlat16_2.xy));
  (u_xlat16_19.xy = ((vec2(vec2(_ES_FogCharacterNearFactor, _ES_FogCharacterNearFactor)) * u_xlat16_19.xy) + u_xlat16_0.xy));
  (u_xlat16_2.xy = ((-u_xlat16_19.xy) + u_xlat16_2.xy));
  (u_xlat3.xyz = (vs_TEXCOORD6.xyz + (-_WorldSpaceCameraPos.xyz)));
  (u_xlat3.x = dot(u_xlat3.xyz, u_xlat3.xyz));
  (u_xlat3.x = sqrt(u_xlat3.x));
  (u_xlat16_19.xy = ((-u_xlat16_19.xy) + u_xlat3.xx));
  (u_xlat16_19.xy = (u_xlat16_19.xy / u_xlat16_2.xy));
  (u_xlat16_19.xy = clamp(u_xlat16_19.xy, 0.0, 1.0));
  (u_xlat16_19.xy = (u_xlat16_0.zw * u_xlat16_19.xy));
  (u_xlat16_2.xy = (((-u_xlat16_19.xy) * u_xlat16_19.xy) + u_xlat16_19.xy));
  (u_xlat16_0.xy = ((u_xlat16_19.xy * u_xlat16_2.xy) + u_xlat16_19.xy));
  (u_xlat16_0.w = ((_ES_TransitionRate * 0.125) + _ES_HeightFogColor));
  (u_xlat16_3.xyz = textureLod(_ES_GradientAtlas, u_xlat16_0.yw, 0.0).xyz);
  (u_xlat16_2.xyz = (u_xlat16_1.xxx * u_xlat16_3.xyz));
  (u_xlat16_0.z = ((_ES_TransitionRate * 0.125) + _ES_FogColor));
  (u_xlat16_4.xyz = textureLod(_ES_GradientAtlas, u_xlat16_0.xz, 0.0).xyz);
  (u_xlat16_0.xy = u_xlat16_0.xy);
  (u_xlat16_0.xy = clamp(u_xlat16_0.xy, 0.0, 1.0));
  (u_xlat16_19.x = (((-_GlobalOneMinusAvatarIntensityEnable) * _GlobalOneMinusAvatarIntensity) + 1.0));
  (u_xlat16_5.xyz = (u_xlat16_19.xxx * _OutlineColor0.xyz));
debugColor = vs_TEXCOORD6.xyz;


  (u_xlat16_19.x = (((-_OneMinusGlobalMainIntensityEnable) * _OneMinusGlobalMainIntensity) + 1.0));
  (u_xlat16_6.xyz = (u_xlat16_19.xxx * u_xlat16_5.xyz));
  (u_xlat16_7.xyz = ((u_xlat16_4.xyz * u_xlat16_0.xxx) + (-u_xlat16_6.xyz)));
  (u_xlat16_7.xyz = ((u_xlat16_0.xxx * u_xlat16_7.xyz) + u_xlat16_6.xyz));
  (u_xlat16_8.xyz = ((u_xlat16_4.xyz * u_xlat16_0.xxx) + u_xlat16_7.xyz));
  (u_xlat16_28 = (_ES_FogDensity + -1.0));
  (u_xlat16_28 = clamp(u_xlat16_28, 0.0, 1.0));
  (u_xlat16_7.xyz = ((u_xlat16_8.xyz * vec3(u_xlat16_28)) + u_xlat16_7.xyz));
  (u_xlat16_8.xyz = ((u_xlat16_2.xyz * u_xlat16_0.yyy) + (-u_xlat16_7.xyz)));
  (u_xlat16_8.xyz = ((u_xlat16_0.yyy * u_xlat16_8.xyz) + u_xlat16_7.xyz));
  (u_xlat16_2.xyz = ((u_xlat16_2.xyz * u_xlat16_0.yyy) + u_xlat16_8.xyz));
  (u_xlat16_2.xyz = ((u_xlat16_2.xyz * vec3(u_xlat16_10)) + u_xlat16_8.xyz));
  (u_xlat16_8.xyz = (u_xlat16_1.xxx * u_xlat16_2.xyz));
  (u_xlat16_2.xyz = ((-u_xlat16_7.xyz) + u_xlat16_2.xyz));
  (u_xlat16_1.xyw = ((u_xlat16_1.xxx * u_xlat16_2.xyz) + u_xlat16_7.xyz));
  (u_xlat16_2.xyz = ((u_xlat16_8.xyz * u_xlat16_0.yyy) + u_xlat16_7.xyz));
  (u_xlat16_2.xyz = ((-u_xlat16_1.xyw) + u_xlat16_2.xyz));
  (u_xlat16_29 = max(u_xlat16_3.z, u_xlat16_3.y));
  (u_xlat16_29 = max(u_xlat16_29, u_xlat16_3.x));
  (u_xlat16_29 = ((_ES_HeightFogAddAjust * (-u_xlat16_29)) + u_xlat16_29));
  (u_xlat16_1.xyw = ((vec3(u_xlat16_29) * u_xlat16_2.xyz) + u_xlat16_1.xyw));
  (u_xlat16_1.xyw = (((-u_xlat16_5.xyz) * u_xlat16_19.xxx) + u_xlat16_1.xyw));
  (SV_Target0.xyz = ((u_xlat16_19.xxx * u_xlat16_1.xyw) + u_xlat16_6.xyz));

    SV_Target0.xyz = debugColor;

  (SV_Target0.w = 0.0);
  (SV_Target1 = vec4(uintBitsToFloat(4290772992u), uintBitsToFloat(4290772992u), 0.50196081, 0.0));
  (SV_Target2 = 0.0);
  return ;
}