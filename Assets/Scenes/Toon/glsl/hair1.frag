#version 450
uniform vec4 _MainLightPosition;
uniform vec2 _DisableCharacterLocalLight;
uniform vec4 _CharacterLocalMainLightPosition;
uniform vec4 _CharacterLocalMainLightColor1;
uniform vec4 _CharacterLocalMainLightColor2;
uniform vec4 _CharacterLocalMainLightDark;
uniform vec4 _NewLocalLightDir;
uniform vec4 _NewLocalLightCharCenter;
uniform vec4 _NewLocalLightStrength;
uniform vec4 hlslcc_mtx4x4unity_MatrixV[4];
uniform vec4 _CustomMainLightDir;
uniform vec3 _ES_MonsterLightDir;
uniform vec4 hlslcc_mtx4x4_MainLightWorldToShadow[20];
uniform vec4 _CascadeShadowSplitSpheres0;
uniform vec4 _CascadeShadowSplitSpheres1;
uniform vec4 _CascadeShadowSplitSpheres2;
uniform vec4 _CascadeShadowSplitSpheres3;
uniform vec4 _CascadeShadowSplitSphereRadii;
uniform vec4 _MainLightShadowParams;
uniform vec4 _MainLightShadowmapSize;
uniform float _ES_Indoor;
uniform float _ES_LEVEL_ADJUST_ON;
uniform float _ES_CharacterToonRampMode;
uniform float _ES_CharacterDisableLocalMainLight;
uniform vec4 _ES_RimShadowColor;
uniform float _ES_RimShadowIntensity;
uniform float _ES_CharacterShadowFactor;
uniform vec4 _ES_LevelHighLightColor;
uniform vec4 _ES_LevelShadowColor;
uniform float _ES_LevelShadow;
uniform float _ES_LevelMid;
uniform float _ES_LevelHighLight;
uniform float _ES_IndoorCharShadowAsCookie;
layout(std140, binding = 0) uniform CharacterSvarogBuffer{
    float Xhlslcc_UnusedX_DissolveEmisRange;
    float Xhlslcc_UnusedX_DissolveEmisScale;
    vec4 Xhlslcc_UnusedX_DissolveColor;
    float Xhlslcc_UnusedX_DissolveDirectionalRange;
    float Xhlslcc_UnusedX_DissolveDirectionalOffset;
    vec2 Xhlslcc_UnusedX_DissolveDirection;
    float Xhlslcc_UnusedX_RimEdgeSoftness0;
    float Xhlslcc_UnusedX_RimType0;
    float Xhlslcc_UnusedX_RimDark0;
    vec3 Xhlslcc_UnusedX_RimShadowColor;
    float _RimShadowCt;
    float _RimShadowIntensity;
    float Xhlslcc_UnusedX_RimShadowWidth;
    float Xhlslcc_UnusedX_RimShadowFeather;
    vec4 _RimShadowColor0;
    float _RimShadowWidth0;
    float _RimShadowFeather0;
    vec3 _RimShadowOffset;
    vec4 Xhlslcc_UnusedX_SkyTex_ST;
    vec4 Xhlslcc_UnusedX_SkyMask_ST;
    vec4 Xhlslcc_UnusedX_SkyStarTex_ST;
    vec4 Xhlslcc_UnusedX_SkyStarMaskTex_ST;
    float Xhlslcc_UnusedX_SkyRange;
    vec4 Xhlslcc_UnusedX_SkyStarColor;
    vec4 Xhlslcc_UnusedX_SkyFresnelColor;
    vec2 Xhlslcc_UnusedX_SkyStarSpeed;
    float Xhlslcc_UnusedX_SkyStarTexScale;
    float Xhlslcc_UnusedX_SkyStarDepthScale;
    float Xhlslcc_UnusedX_SkyStarMaskTexScale;
    float Xhlslcc_UnusedX_SkyStarMaskTexSpeed;
    float Xhlslcc_UnusedX_SkyFresnelBaise;
    float Xhlslcc_UnusedX_SkyFresnelSmooth;
    float Xhlslcc_UnusedX_SkyFresnelScale;
    float Xhlslcc_UnusedX_OSScale;
    float Xhlslcc_UnusedX_StarDensity;
    float Xhlslcc_UnusedX_StarMode;
    int Xhlslcc_UnusedX_FlameID;
    vec4 Xhlslcc_UnusedX_FlameColorOut;
    vec4 Xhlslcc_UnusedX_FlameColorIn;
    vec4 Xhlslcc_UnusedX_EffectColor0;
    vec4 Xhlslcc_UnusedX_EffectColor1;
    vec4 Xhlslcc_UnusedX_EffectColor2;
    vec4 Xhlslcc_UnusedX_EffectColor3;
    vec4 Xhlslcc_UnusedX_EffectColor4;
    vec4 Xhlslcc_UnusedX_EffectColor5;
    vec4 Xhlslcc_UnusedX_EffectColor6;
    vec4 Xhlslcc_UnusedX_EffectColor7;
    float Xhlslcc_UnusedX_FlameHeight;
    float Xhlslcc_UnusedX_FlameWidth;
    float Xhlslcc_UnusedX_FlameSpeed;
    float Xhlslcc_UnusedX_FlameSwirilTexScale;
    float Xhlslcc_UnusedX_FlameSwirilSpeed;
    float Xhlslcc_UnusedX_FlameSwirilScale;
    float Xhlslcc_UnusedX_CrystalTransparency;
    float Xhlslcc_UnusedX_CrystalRange1;
    float Xhlslcc_UnusedX_CrystalRange2;
    float Xhlslcc_UnusedX_ColorIntensity;
    float Xhlslcc_UnusedX_ScreenNoiseInst;
    vec4 Xhlslcc_UnusedX_ScreenNoiseST;
    float Xhlslcc_UnusedX_ScreenLineInst;
    vec4 Xhlslcc_UnusedX_ScreenLineST;
    float Xhlslcc_UnusedX_ScreenNoiseseed2;
    vec4 Xhlslcc_UnusedX_SunGlassesTilingOffset;
    vec4 Xhlslcc_UnusedX_SunglassesSpecluarColor;
    float Xhlslcc_UnusedX_HighlightWidthL;
    float Xhlslcc_UnusedX_HighlightWidthR;
    float Xhlslcc_UnusedX_TotalSizeL;
    float Xhlslcc_UnusedX_TotalSizeR;
    float Xhlslcc_UnusedX_BlendRadiusL;
    float Xhlslcc_UnusedX_BlendRadiusR;
    float Xhlslcc_UnusedX_HighlightAngleL;
    float Xhlslcc_UnusedX_HighlightAngleR;
    float Xhlslcc_UnusedX_HighlightOffsetL;
    float Xhlslcc_UnusedX_HighlightOffsetR;
    float Xhlslcc_UnusedX_BendValue;
    float Xhlslcc_UnusedX_ReflectionRoughness;
    float Xhlslcc_UnusedX_ReflectionThreshold;
    float Xhlslcc_UnusedX_ReflectionSoftness;
    float Xhlslcc_UnusedX_ReflectionBlendThreshold;
    float Xhlslcc_UnusedX_ReflectionReversedThreshold;
    float Xhlslcc_UnusedX_FakeRefBlendIntensity;
    float Xhlslcc_UnusedX_FakeRefAddIntensity;
    vec4 Xhlslcc_UnusedX_ReflectionColor;
    vec4 Xhlslcc_UnusedX_ReflectionBlendColor;
};
layout(std140, binding = 1) uniform UnityPerMaterial{
    vec3 Xhlslcc_UnusedX_CharaWorldSpaceOffset;
    float Xhlslcc_UnusedX_DisableWorldSpaceGradient;
    vec4 _Color;
    vec4 _BackColor;
    vec4 _MainTex_ST;
    vec4 Xhlslcc_UnusedX_EyeShadowColor;
    vec4 Xhlslcc_UnusedX_BrightDiffuseColor;
    vec4 Xhlslcc_UnusedX_ShadowDiffuseColor;
    vec4 Xhlslcc_UnusedX_SpecularColor0;
    float _IsMonster;
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
    vec4 Xhlslcc_UnusedX_OutlineColor0;
    float Xhlslcc_UnusedX_OutlineWidth;
    float Xhlslcc_UnusedX_OneMinusCharacterOutlineWidthScale;
    float Xhlslcc_UnusedX_OutlineBlendWeight;
    float Xhlslcc_UnusedX_OutlineBlendOffset;
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
layout(std140, binding = 2) uniform UnityPerMaterialCharacterOnly{
    vec4 Xhlslcc_UnusedX_AddColor;
    vec4 Xhlslcc_UnusedX_EnvColor;
    vec4 Xhlslcc_UnusedX_EmissionTintColor;
    float Xhlslcc_UnusedX_BackShadowRange;
    float _ShadowBoost;
    float _ShadowRamp;
    float _ShadowBoostVal;
    vec4 Xhlslcc_UnusedX_ShadowColor;
    vec4 Xhlslcc_UnusedX_EyeBaseShadowColor;
    float Xhlslcc_UnusedX_EyeShadowAngleMin;
    float Xhlslcc_UnusedX_EyeShadowMaxAngle;
    float Xhlslcc_UnusedX_UseUVChannel2;
    float Xhlslcc_UnusedX_UseSpecialEye;
    vec4 Xhlslcc_UnusedX_SpecialEyeShapeTexture_ST;
    vec4 Xhlslcc_UnusedX_EyeCenter;
    vec4 Xhlslcc_UnusedX_EyeSPColor1;
    vec4 Xhlslcc_UnusedX_EyeSPColor2;
    float Xhlslcc_UnusedX_SpecialEyeIntensity;
    vec4 Xhlslcc_UnusedX_LipLinefixColor;
    float Xhlslcc_UnusedX_LipLineFixThrd;
    float Xhlslcc_UnusedX_LipLineFixStart;
    float Xhlslcc_UnusedX_LipLineFixMax;
    float Xhlslcc_UnusedX_LipLineFixScale;
    float Xhlslcc_UnusedX_LipLineFixSC;
    int Xhlslcc_UnusedX_UseOverHeated;
    vec4 Xhlslcc_UnusedX_HeatDir;
    vec4 Xhlslcc_UnusedX_HeatColor0;
    vec4 Xhlslcc_UnusedX_HeatColor1;
    vec4 Xhlslcc_UnusedX_HeatColor2;
    float Xhlslcc_UnusedX_HeatedHeight;
    float Xhlslcc_UnusedX_HeatedThreshould;
    float Xhlslcc_UnusedX_HeatInst;
    float Xhlslcc_UnusedX_ParallaxAlpha;
    float Xhlslcc_UnusedX_ParallaxScale;
    vec4 Xhlslcc_UnusedX_ParallaxMap_ST;
    float Xhlslcc_UnusedX_ShadowIntensity;
    vec4 Xhlslcc_UnusedX_RefractionTexTilingOffset;
    float Xhlslcc_UnusedX_IOR;
    float Xhlslcc_UnusedX_RGBSpread;
    float Xhlslcc_UnusedX_Angle;
    vec4 Xhlslcc_UnusedX_RefractionTintColor;
    float Xhlslcc_UnusedX_DiamondScale;
    vec3 Xhlslcc_UnusedX_OffsetRelativeToCenter;
    vec3 Xhlslcc_UnusedX_EulerAngleOffset;
    vec3 Xhlslcc_UnusedX_FinalOffset;
    vec4 Xhlslcc_UnusedX_RefractionTexTilingOffset_CatHead;
    float Xhlslcc_UnusedX_IOR_CatHead;
    float Xhlslcc_UnusedX_RGBSpread_CatHead;
    float Xhlslcc_UnusedX_Angle_CatHead;
    vec4 Xhlslcc_UnusedX_RefractionTintColor_CatHead;
    float Xhlslcc_UnusedX_DiamondScale_CatHead;
    vec3 Xhlslcc_UnusedX_CenterOffset1;
    vec3 Xhlslcc_UnusedX_OffsetRelativeToCenter1;
    vec3 Xhlslcc_UnusedX_EulerAngleOffset_CatHead;
    vec3 Xhlslcc_UnusedX_FinalOffset_CatHead;
    vec3 Xhlslcc_UnusedX_CatHead_Right;
    vec3 Xhlslcc_UnusedX_CatHead_Up;
    vec3 Xhlslcc_UnusedX_CatHead_Forward;
    vec4 Xhlslcc_UnusedX_RefractionTexTilingOffset_CatHead_Weight;
    vec4 Xhlslcc_UnusedX_RefractionTintColor_CatHead_Weight;
    float Xhlslcc_UnusedX_Angle_CatHead_Weight;
    vec4 Xhlslcc_UnusedX_FinalOffset_CatHead_Weight;
    float Xhlslcc_UnusedX_SpecularIntensity_CatHead;
    float _CharacterToonRampModeCompensation;
    vec4 Xhlslcc_UnusedX_CenterOffset;
    vec4 Xhlslcc_UnusedX_Direction;
    float Xhlslcc_UnusedX_RefIntensity;
    float Xhlslcc_UnusedX_AlphaTestThreshold;
};
layout(location = 0) uniform sampler2D _MainTex;
layout(location = 1) uniform sampler2D _LightMap;
layout(location = 2) uniform sampler2D _DiffuseRampMultiTex;
layout(location = 3) uniform sampler2D _DiffuseCoolRampMultiTex;
layout(location = 4) uniform sampler2D _MainLightShadowmapTexture;
layout(location = 5) uniform sampler2DShadow hlslcc_zcmp_MainLightShadowmapTexture;
in vec4 vs_TEXCOORD0;
in vec3 vs_TEXCOORD2;
in vec3 vs_TEXCOORD3;
in vec4 vs_TEXCOORD4;
layout(location = 0) out vec4 SV_Target0;
layout(location = 1) out vec4 SV_Target1;
layout(location = 2) out float SV_Target2;
vec4 u_xlat0;
vec4 u_xlat16_0;
bvec4 u_xlatb0;
vec4 u_xlat1;
vec3 u_xlat16_1;
ivec3 u_xlati1;
uint u_xlatu1;
bvec2 u_xlatb1;
vec4 u_xlat2;
vec4 u_xlat16_2;
vec3 u_xlat3;
vec3 u_xlat16_3;
bvec3 u_xlatb3;
vec4 u_xlat4;
vec4 u_xlat16_4;
vec4 u_xlat5;
vec3 u_xlat16_5;
vec4 u_xlat6;
vec4 u_xlat16_6;
vec4 u_xlat7;
vec4 u_xlat16_7;
vec4 u_xlat16_8;
vec4 u_xlat9;
vec3 u_xlat16_9;
vec3 u_xlat10;
float u_xlat16_10;
vec3 u_xlat16_11;
vec3 u_xlat16_12;
vec3 u_xlat16_13;
vec3 u_xlat16_14;
vec3 u_xlat16;
ivec3 u_xlati16;
bool u_xlatb16;
float u_xlat16_18;
vec2 u_xlat16_20;
vec3 u_xlat16_23;
float u_xlat16_25;
float u_xlat16_26;
float u_xlat16_31;
vec2 u_xlat33;
float u_xlat16_33;
bool u_xlatb33;
vec2 u_xlat16_36;
vec2 u_xlat16_38;
float u_xlat16_41;
float u_xlat46;
float u_xlat16_46;
bool u_xlatb46;
float u_xlat16_48;
float u_xlat16_53;
float u_xlat16_56;
void main(){
    vec3 debugColor = vec3(0.0, 0.0, 0.0);
    //vs_TEXCOORD0 = uv
    //vs_TEXCOORD2 = positionWS
    //vs_TEXCOORD3 = normalWS
    //vs_TEXCOORD4 = viewDirOS
    vec4 hlslcc_FragCoord = vec4(gl_FragCoord.xyz, (1.0 / gl_FragCoord.w));
    (u_xlat0.xyz = (vs_TEXCOORD2.xyz + (-_CascadeShadowSplitSpheres0.xyz)));
    (u_xlat0.x = dot(u_xlat0.xyz, u_xlat0.xyz));
    (u_xlat1.xyz = (vs_TEXCOORD2.xyz + (-_CascadeShadowSplitSpheres1.xyz)));
    (u_xlat0.y = dot(u_xlat1.xyz, u_xlat1.xyz));
    (u_xlat1.xyz = (vs_TEXCOORD2.xyz + (-_CascadeShadowSplitSpheres2.xyz)));
    (u_xlat0.z = dot(u_xlat1.xyz, u_xlat1.xyz));
    (u_xlat1.xyz = (vs_TEXCOORD2.xyz + (-_CascadeShadowSplitSpheres3.xyz)));
    (u_xlat0.w = dot(u_xlat1.xyz, u_xlat1.xyz));
    (u_xlatb0 = lessThan(u_xlat0, _CascadeShadowSplitSphereRadii));
    (u_xlat16_2.x = ((u_xlatb0.x) ? (-1.0) : (-0.0)));
    (u_xlat16_2.y = ((u_xlatb0.y) ? (-1.0) : (-0.0)));
    (u_xlat16_2.z = ((u_xlatb0.z) ? (-1.0) : (-0.0)));
    (u_xlat16_0.x = ((u_xlatb0.x) ? (1.0) : (0.0)));
    (u_xlat16_0.y = ((u_xlatb0.y) ? (1.0) : (0.0)));
    (u_xlat16_0.z = ((u_xlatb0.z) ? (1.0) : (0.0)));
    (u_xlat16_0.w = ((u_xlatb0.w) ? (1.0) : (0.0)));
    (u_xlat16_2.xyz = (u_xlat16_2.xyz + u_xlat16_0.yzw));
    //u_xlat16_2.xyz = 0

    (u_xlat16_0.yzw = max(u_xlat16_2.xyz, vec3(0.0, 0.0, 0.0)));
    (u_xlat16_2.x = dot(u_xlat16_0, vec4(4.0, 3.0, 2.0, 1.0)));
    (u_xlat16_2.x = ((-u_xlat16_2.x) + 4.0));
    (u_xlatu1 = uint(u_xlat16_2.x));
    (u_xlati1.x = int((int(u_xlatu1) << 2)));
    (u_xlat16.xyz = (vs_TEXCOORD2.yyy * hlslcc_mtx4x4_MainLightWorldToShadow[(u_xlati1.x + 1)].xyz));
    (u_xlat16.xyz = ((hlslcc_mtx4x4_MainLightWorldToShadow[u_xlati1.x].xyz * vs_TEXCOORD2.xxx) + u_xlat16.xyz));
    (u_xlat16.xyz = ((hlslcc_mtx4x4_MainLightWorldToShadow[(u_xlati1.x + 2)].xyz * vs_TEXCOORD2.zzz) + u_xlat16.xyz));
    (u_xlat1.xyz = (u_xlat16.xyz + hlslcc_mtx4x4_MainLightWorldToShadow[(u_xlati1.x + 3)].xyz));
    (u_xlat3.xy = ((u_xlat1.xy * _MainLightShadowmapSize.zw) + vec2(0.5, 0.5)));
    (u_xlat3.xy = floor(u_xlat3.xy));
    (u_xlat33.xy = ((u_xlat1.xy * _MainLightShadowmapSize.zw) + (-u_xlat3.xy)));
    (u_xlat16_2.xy = min(u_xlat33.xy, vec2(0.0, 0.0)));
    (u_xlat16_0 = ((-u_xlat33.xxyy) + vec4(1.0, 2.0, 1.0, 2.0)));
    (u_xlat16_2.xy = (((-u_xlat16_2.xy) * u_xlat16_2.xy) + u_xlat16_0.xz));
    (u_xlat16_0 = (u_xlat16_0 * vec4(0.081632003, 0.081632003, 0.081632003, 0.081632003)));
    (u_xlat16_2.xy = (u_xlat16_2.xy + vec2(2.0, 2.0)));
    (u_xlat16_2.xy = (u_xlat16_2.xy * vec2(0.081632003, 0.081632003)));
    (u_xlat16_4.y = u_xlat16_2.x);
    (u_xlat16_5.xy = max(u_xlat33.xy, vec2(0.0, 0.0)));
    (u_xlat16_6 = (u_xlat33.xxxy + vec4(0.5, 1.0, 2.0, 0.5)));
    (u_xlat16_5.x = (((-u_xlat16_5.x) * u_xlat16_5.x) + u_xlat16_6.y));
    (u_xlat16_5.x = (u_xlat16_5.x + 2.0));
    (u_xlat16_7.z = (u_xlat16_5.x * 0.081632003));
    (u_xlat16_8 = (u_xlat16_6.xxww * u_xlat16_6.xxww));
    (u_xlat16_4.xz = (u_xlat16_6.yz * vec2(0.081632003, 0.081632003)));
    (u_xlat16_5.xz = ((u_xlat16_8.xz * vec2(0.5, 0.5)) + (-u_xlat33.xy)));
    (u_xlat16_6.xy = (u_xlat16_8.yw * vec2(0.040816002, 0.040816002)));
    (u_xlat16_36.xy = (u_xlat33.yy + vec2(2.0, 1.0)));
    (u_xlat16_8.xy = (u_xlat16_5.zx * vec2(0.081632003, 0.081632003)));
    (u_xlat16_7.x = u_xlat16_8.y);
    (u_xlat16_7.w = u_xlat16_4.x);
    (u_xlat16_4.w = u_xlat16_6.x);
    (u_xlat16_2.w = u_xlat16_6.y);
    (u_xlat16_7.y = u_xlat16_0.y);
    (u_xlat16_4.x = u_xlat16_0.x);
    (u_xlat7 = (u_xlat16_4 + u_xlat16_7));
    (u_xlat4 = (u_xlat16_4 / u_xlat7));
    (u_xlat4 = (u_xlat4 + vec4(-3.5, -1.5, 0.5, 2.5)));
    (u_xlat4 = (u_xlat4.wxyz * _MainLightShadowmapSize.xxxx));
    (u_xlat9.xzw = u_xlat4.yzw);

    (u_xlat16_5.x = (((-u_xlat16_5.y) * u_xlat16_5.y) + u_xlat16_36.y));
    (u_xlat16_20.xy = (u_xlat16_36.xy * vec2(0.081632003, 0.081632003)));
    (u_xlat16_5.x = (u_xlat16_5.x + 2.0));
    (u_xlat16_8.z = (u_xlat16_5.x * 0.081632003));
    (u_xlat16_8.y = u_xlat16_0.w);
    (u_xlat16_2.x = u_xlat16_0.z);
    (u_xlat16_8.w = u_xlat16_20.y);
    (u_xlat16_2.z = u_xlat16_20.x);
    (u_xlat0 = (u_xlat16_2 + u_xlat16_8));
    (u_xlat2 = (u_xlat16_2 / u_xlat0));
    (u_xlat2 = (u_xlat2 + vec4(-3.5, -1.5, 0.5, 2.5)));
    (u_xlat2 = (u_xlat2.xwyz * _MainLightShadowmapSize.yyyy));
    (u_xlat9.y = u_xlat2.x);
    (u_xlat5 = ((u_xlat3.xyxy * _MainLightShadowmapSize.xyxy) + u_xlat9.xyzy));
    vec3 txVec0 = vec3(u_xlat5.zw, u_xlat1.z);
    (u_xlat16_46 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec0, 0.0));
    vec3 txVec1 = vec3(u_xlat5.xy, u_xlat1.z);
    (u_xlat16_33 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec1, 0.0));
    (u_xlat5 = (u_xlat0.xxxx * u_xlat7));
    (u_xlat46 = (u_xlat16_46 * u_xlat5.y));
    (u_xlat46 = ((u_xlat5.x * u_xlat16_33) + u_xlat46));
    (u_xlat33.xy = ((u_xlat3.xy * _MainLightShadowmapSize.xy) + u_xlat9.wy));
    (u_xlat4.y = u_xlat9.y);
    vec3 txVec2 = vec3(u_xlat33.xy, u_xlat1.z);
    (u_xlat16_33 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec2, 0.0));
    (u_xlat46 = ((u_xlat5.z * u_xlat16_33) + u_xlat46));
    (u_xlat9.y = u_xlat2.z);
    (u_xlat4.z = u_xlat9.y);
    (u_xlat6 = ((u_xlat3.xyxy * _MainLightShadowmapSize.xyxy) + u_xlat4.xyxz));
    vec3 txVec3 = vec3(u_xlat6.xy, u_xlat1.z);
    (u_xlat16_33 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec3, 0.0));
    vec3 txVec4 = vec3(u_xlat6.zw, u_xlat1.z);
    (u_xlat16_48 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec4, 0.0));
    (u_xlat46 = ((u_xlat5.w * u_xlat16_33) + u_xlat46));
    (u_xlat5 = ((u_xlat3.xyxy * _MainLightShadowmapSize.xyxy) + u_xlat9.xyzy));
    (u_xlat10.xy = ((u_xlat3.xy * _MainLightShadowmapSize.xy) + u_xlat9.wy));
    vec3 txVec5 = vec3(u_xlat10.xy, u_xlat1.z);
    (u_xlat16_33 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec5, 0.0));
    vec3 txVec6 = vec3(u_xlat5.xy, u_xlat1.z);
    (u_xlat16_10 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec6, 0.0));
    vec3 txVec7 = vec3(u_xlat5.zw, u_xlat1.z);
    (u_xlat16_25 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec7, 0.0));
    (u_xlat5 = (u_xlat0.yyyy * u_xlat7));
    (u_xlat46 = ((u_xlat5.x * u_xlat16_10) + u_xlat46));
    (u_xlat46 = ((u_xlat5.y * u_xlat16_25) + u_xlat46));
    (u_xlat46 = ((u_xlat5.z * u_xlat16_33) + u_xlat46));
    (u_xlat46 = ((u_xlat5.w * u_xlat16_48) + u_xlat46));
    (u_xlat9.y = u_xlat2.w);
    (u_xlat5 = ((u_xlat3.xyxy * _MainLightShadowmapSize.xyxy) + u_xlat9.xyzy));
    vec3 txVec8 = vec3(u_xlat5.xy, u_xlat1.z);
    (u_xlat16_33 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec8, 0.0));
    vec3 txVec9 = vec3(u_xlat5.zw, u_xlat1.z);
    (u_xlat16_48 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec9, 0.0));
    (u_xlat5 = (u_xlat0.zzzz * u_xlat7));
    (u_xlat0 = (u_xlat0.wwww * u_xlat7));
    (u_xlat46 = ((u_xlat5.x * u_xlat16_33) + u_xlat46));
    (u_xlat46 = ((u_xlat5.y * u_xlat16_48) + u_xlat46));
    (u_xlat33.xy = ((u_xlat3.xy * _MainLightShadowmapSize.xy) + u_xlat9.wy));
    (u_xlat2.xzw = u_xlat9.xzw);
    (u_xlat4.w = u_xlat9.y);
    (u_xlat9.xy = ((u_xlat3.xy * _MainLightShadowmapSize.xy) + u_xlat4.xw));
    vec3 txVec10 = vec3(u_xlat9.xy, u_xlat1.z);
    (u_xlat16_9.x = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec10, 0.0));
    vec3 txVec11 = vec3(u_xlat33.xy, u_xlat1.z);
    (u_xlat16_33 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec11, 0.0));
    (u_xlat46 = ((u_xlat5.z * u_xlat16_33) + u_xlat46));
    (u_xlat46 = ((u_xlat5.w * u_xlat16_9.x) + u_xlat46));
    (u_xlat5 = ((u_xlat3.xyxy * _MainLightShadowmapSize.xyxy) + u_xlat2.xyzy));
    (u_xlat33.xy = ((u_xlat3.xy * _MainLightShadowmapSize.xy) + u_xlat2.wy));
    (u_xlat4.y = u_xlat2.y);
    (u_xlat3.xy = ((u_xlat3.xy * _MainLightShadowmapSize.xy) + u_xlat4.xy));
    vec3 txVec12 = vec3(u_xlat3.xy, u_xlat1.z);
    (u_xlat16_3.x = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec12, 0.0));
    vec3 txVec13 = vec3(u_xlat33.xy, u_xlat1.z);
    (u_xlat16_18 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec13, 0.0));
    vec3 txVec14 = vec3(u_xlat5.xy, u_xlat1.z);
    (u_xlat16_33 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec14, 0.0));
    vec3 txVec15 = vec3(u_xlat5.zw, u_xlat1.z);
    (u_xlat16_48 = textureLod(hlslcc_zcmp_MainLightShadowmapTexture, txVec15, 0.0));
    (u_xlat46 = ((u_xlat0.x * u_xlat16_33) + u_xlat46));
    (u_xlat46 = ((u_xlat0.y * u_xlat16_48) + u_xlat46));
    (u_xlat46 = ((u_xlat0.z * u_xlat16_18) + u_xlat46));
    (u_xlat46 = ((u_xlat0.w * u_xlat16_3.x) + u_xlat46));
    (u_xlat16_8.x = ((-u_xlat46) + 1.0));
    (u_xlat16_23.x = ((-_MainLightShadowParams.x) + 1.0));
    (u_xlat16_8.x = ((u_xlat16_8.x * _MainLightShadowParams.x) + u_xlat16_23.x));
    (u_xlat3.xy = (_MainLightShadowmapSize.xy * vec2(4.0, 4.0)));
    (u_xlatb3.xy = greaterThanEqual(u_xlat3.xyxx, u_xlat1.xyxx).xy);
    (u_xlati16.z = int(uint(((uint(u_xlatb3.y) * 4294967295u) | (uint(u_xlatb3.x) * 4294967295u)))));
    (u_xlat16_23.xy = (((-_MainLightShadowmapSize.xy) * vec2(4.0, 4.0)) + vec2(1.0, 1.0)));
    (u_xlatb1.xy = greaterThanEqual(u_xlat1.xyxx, u_xlat16_23.xyxx).xy);
    (u_xlati1.x = int(uint(((uint(u_xlatb1.y) * 4294967295u) | (uint(u_xlatb1.x) * 4294967295u)))));
    (u_xlati16.x = int((((0.0 >= u_xlat1.z)) ? (4294967295u) : (0u))));
    (u_xlati1.z = int((((u_xlat1.z >= 1.0)) ? (4294967295u) : (0u))));
    (u_xlati1.xy = ivec2(uvec2((uint(u_xlati1.x) | uint(u_xlati16.z)), (uint(u_xlati1.z) | uint(u_xlati16.x)))));
    (u_xlati1.x = int(uint((uint(u_xlati1.x) | uint(u_xlati1.y)))));
    (u_xlat16_8.x = (((u_xlati1.x != 0)) ? (1.0) : (u_xlat16_8.x)));
    (u_xlat16_23.x = ((-u_xlat16_8.x) + 1.0));
    (u_xlat1.x = (_ES_Indoor * _ES_IndoorCharShadowAsCookie));
    (u_xlat16_23.x = ((u_xlat1.x * u_xlat16_23.x) + u_xlat16_8.x));
    (u_xlat16_8.x = ((u_xlat16_8.x * 0.80000001) + -0.80000001));
    (u_xlat16_8.x = ((u_xlat1.x * u_xlat16_8.x) + 1.0));
    (u_xlat16_38.x = ((-u_xlat16_23.x) + 1.0));
//        debugColor = u_xlat16_38.xxx;
    (u_xlat16_23.x = ((_ES_CharacterShadowFactor * u_xlat16_38.x) + u_xlat16_23.x));
    (u_xlat1.x = ((-u_xlat16_23.x) + 1.0));
    (u_xlat1.x = ((_CharacterLocalMainLightPosition.w * u_xlat1.x) + u_xlat16_23.x));
    (u_xlatb16 = (0.5 < _ES_CharacterDisableLocalMainLight));
    (u_xlat1.x = ((u_xlatb16) ? (u_xlat16_23.x) : (u_xlat1.x)));

    (u_xlat16_23.x = (u_xlat1.x * 6.6666665));
    (u_xlat16_23.x = clamp(u_xlat16_23.x, 0.0, 1.0));
    (u_xlat16_38.x = ((u_xlat16_23.x * -2.0) + 3.0));
    (u_xlat16_23.x = (u_xlat16_23.x * u_xlat16_23.x));
    (u_xlat16_23.x = (u_xlat16_23.x * u_xlat16_38.x));
    (u_xlat16_38.x = (_ShadowBoostVal + 1.0));
    (u_xlat16_53 = ((-u_xlat16_38.x) + 1.0));
    (u_xlat16_23.x = ((u_xlat16_23.x * u_xlat16_53) + u_xlat16_38.x));
    (u_xlatb16 = (u_xlat1.x < 0.1));

    //u_xlat16_23.x = Shadow??
    //u_xlat1.x == 1

    (u_xlat16_31 = texture(_LightMap, vs_TEXCOORD0.xy).y);
    (u_xlat16_38.x = min(u_xlat16_31, 0.80000001));
    (u_xlat16_53 = (u_xlat16_31 + u_xlat16_31));
    (u_xlat16_38.x = ((u_xlatb16) ? (u_xlat16_38.x) : (1.0)));
    //u_xlat16_38.xxx == 1

    (u_xlat16_11.x = (_ES_CharacterDisableLocalMainLight + 1.0));
    (u_xlat16_11.x = (u_xlat16_11.x + (-abs(_DisableCharacterLocalLight.x))));
    (u_xlatb16 = (0.5 < u_xlat16_11.x));
    (u_xlat16.xyz = ((bool(u_xlatb16)) ? (_MainLightPosition.xyz) : (_CharacterLocalMainLightPosition.xyz)));
    (u_xlatb3.x = (0.5 < _IsMonster));
    (u_xlat16_11.xyz = ((u_xlatb3.x) ? (_ES_MonsterLightDir.xyz) : (u_xlat16.xyz)));
    (u_xlat16_12.xyz = ((-u_xlat16_11.xyz) + _CustomMainLightDir.xyz));
    (u_xlat16_11.xyz = ((_CustomMainLightDir.www * u_xlat16_12.xyz) + u_xlat16_11.xyz));
    (u_xlat16_11.xyz = ((u_xlatb3.x) ? (_ES_MonsterLightDir.xyz) : (u_xlat16_11.xyz)));
    //u_xlat16_11.xyz = lightDir
    (u_xlat16_56 = dot(vs_TEXCOORD3.xyz, vs_TEXCOORD3.xyz));
    (u_xlat16_56 = inversesqrt(u_xlat16_56));
    (u_xlat16_12.xyz = (vec3(u_xlat16_56) * vs_TEXCOORD3.xyz));
    //u_xlat16_12.xyz = normalWS

    (u_xlat16_56 = (((((gl_FrontFacing) ? (4294967295u) : (0u)) != 0u)) ? (1.0) : (-1.0)));
    (u_xlat16_12.xyz = (vec3(u_xlat16_56) * u_xlat16_12.xyz));
    //u_xlat16_11.x = NdotL
    (u_xlat16_11.x = dot(u_xlat16_12.xyz, u_xlat16_11.xyz));
    (u_xlat16_11.x = ((u_xlat16_11.x * 0.5) + 0.5));
    (u_xlat16_11.x = clamp(u_xlat16_11.x, 0.0, 1.0));
    //u_xlat16_11.x = Halflambert

    (u_xlat16_53 = dot(u_xlat16_11.xx, vec2(u_xlat16_53)));

    (u_xlat16_53 = min(u_xlat16_8.x, u_xlat16_53));
    (u_xlat16_53 = (u_xlat1.x * u_xlat16_53));

    (u_xlat16_11.x = max(u_xlat16_53, 0.001));
    (u_xlatb1.x = (_ShadowRamp < u_xlat16_53));
    (u_xlat16_53 = ((u_xlat16_11.x * 0.85000002) + 0.15000001));
    (u_xlat16_53 = ((u_xlatb1.x) ? (0.99000001) : (u_xlat16_53)));

    //u_xlat16_53 = halfLambert
    (u_xlat16_11.x = ((u_xlat16_53 * u_xlat16_38.x) + -0.80000001));
    (u_xlat16_13.x = (u_xlat16_38.x * u_xlat16_53));
    (u_xlat16_38.x = (u_xlat16_11.x * 10.000004));
    //1-smoothstep
    (u_xlat16_38.x = clamp(u_xlat16_38.x, 0.0, 1.0));
    (u_xlat16_53 = ((u_xlat16_38.x * -2.0) + 3.0));
    (u_xlat16_38.x = (u_xlat16_38.x * u_xlat16_38.x));
    (u_xlat1.x = (((-u_xlat16_53) * u_xlat16_38.x) + 1.0));
    //
    (u_xlat1.x = (u_xlat1.x * _NewLocalLightStrength.z));
    (u_xlat16.xyz = (_CharacterLocalMainLightDark.xyz + vec3(-1.0, -1.0, -1.0)));
    (u_xlat1.xyz = ((u_xlat1.xxx * u_xlat16.xyz) + vec3(1.0, 1.0, 1.0)));
    (u_xlat16_13.y = 0.0625);
    (u_xlat16_3.xyz = texture(_DiffuseCoolRampMultiTex, u_xlat16_13.xy).xyz);
    (u_xlat16_9.xyz = texture(_DiffuseRampMultiTex, u_xlat16_13.xy).xyz);
    (u_xlat16_11.xyz = (u_xlat16_3.xyz + (-u_xlat16_9.xyz)));
    (u_xlat16_38.x = (_ES_CharacterToonRampMode + (-_CharacterToonRampModeCompensation)));
    (u_xlat16_38.x = clamp(u_xlat16_38.x, 0.0, 1.0));
    (u_xlat16_11.xyz = ((u_xlat16_38.xxx * u_xlat16_11.xyz) + u_xlat16_9.xyz));

    //rampDiffuse1
    (u_xlat16_13.xyz = ((u_xlat16_11.xyz * u_xlat1.xyz) + (-vec3(vec3(_ES_LevelMid, _ES_LevelMid, _ES_LevelMid)))));
    (u_xlat16_38.xy = ((-vec2(_ES_LevelMid, _ES_LevelShadow)) + vec2(_ES_LevelHighLight, _ES_LevelMid)));

    (u_xlat16_13.xyz = (u_xlat16_13.xyz / u_xlat16_38.xxx));
    (u_xlat16_13.xyz = ((u_xlat16_13.xyz * vec3(0.5, 0.5, 0.5)) + vec3(0.5, 0.5, 0.5)));
    (u_xlat16_13.xyz = clamp(u_xlat16_13.xyz, 0.0, 1.0));
    //todo
    (u_xlat16_14.xyz = (_ES_LevelHighLightColor.www * _ES_LevelHighLightColor.xyz));
    (u_xlat16_14.xyz = (u_xlat16_14.xyz + u_xlat16_14.xyz));
    (u_xlat16_13.xyz = (u_xlat16_13.xyz * u_xlat16_14.xyz));

//rampDiffuse2
    (u_xlat16_14.xyz = (((-u_xlat16_11.xyz) * u_xlat1.xyz) + vec3(vec3(_ES_LevelMid, _ES_LevelMid, _ES_LevelMid))));
    //darkColor
    (u_xlat1.xyz = (u_xlat1.xyz * u_xlat16_11.xyz));
    (u_xlat16_11.xyz = (u_xlat16_14.xyz / u_xlat16_38.yyy));
    (u_xlat16_11.xyz = (((-u_xlat16_11.xyz) * vec3(0.5, 0.5, 0.5)) + vec3(0.5, 0.5, 0.5)));
    (u_xlat16_11.xyz = clamp(u_xlat16_11.xyz, 0.0, 1.0));
    (u_xlat16_14.xyz = (_ES_LevelShadowColor.www * _ES_LevelShadowColor.xyz));
    (u_xlat16_14.xyz = (u_xlat16_14.xyz + u_xlat16_14.xyz));
    (u_xlat16_11.xyz = (u_xlat16_11.xyz * u_xlat16_14.xyz));

//
    (u_xlat16_38.x = dot(u_xlat1.xyz, vec3(1.0, 1.0, 1.0)));
    (u_xlatb46 = (2.9000001 < u_xlat16_38.x));
    //u_xlatb46 = diffuse mask?
    (u_xlat16_11.xyz = ((bool(u_xlatb46)) ? (u_xlat16_13.xyz) : (u_xlat16_11.xyz)));

    (u_xlatb46 = (0.5 < _ES_LEVEL_ADJUST_ON));
    //u_xlatb46 = true
    (u_xlat16_11.xyz = ((bool(u_xlatb46)) ? (u_xlat16_11.xyz) : (u_xlat1.xyz)));


    (u_xlat16_23.xyz = (u_xlat16_23.xxx * u_xlat16_11.xyz));
    //u_xlatb1 = false
    (u_xlatb1.x = (0.5 < _ShadowBoost));
    (u_xlat16_23.xyz = ((u_xlatb1.x) ? (u_xlat16_23.xyz) : (u_xlat16_11.xyz)));
    //u_xlat16_23=levelShadowColor

    (u_xlat16_1.xyz = texture(_MainTex, vs_TEXCOORD0.xy).xyz);
    (u_xlat16_11.xyz = (((uint(((gl_FrontFacing) ? (4294967295u) : (0u))) != 0u)) ? (_Color.xyz) : (_BackColor.xyz)));
    (u_xlat1.xyz = (u_xlat16_1.xyz * u_xlat16_11.xyz));
    //u_xlat1 = albedo

    (u_xlat16_11.xyz = (((-u_xlat16_23.xyz) * u_xlat1.xyz) + vec3(1.0, 1.0, 1.0)));
    (u_xlat16_11.xyz = (u_xlat16_11.xyz + u_xlat16_11.xyz));
    //_CharacterLocalMainLightColor1 = 0
    (u_xlat16_13.xyz = ((-_CharacterLocalMainLightColor1.xyz) + vec3(1.0, 1.0, 1.0)));
    (u_xlat16_11.xyz = (((-u_xlat16_11.xyz) * u_xlat16_13.xyz) + vec3(1.0, 1.0, 1.0)));
    //u_xlat16_11=temp

    (u_xlat16_13.xyz = (u_xlat1.xyz * u_xlat16_23.xyz));
    (u_xlat16_14.xyz = (u_xlat16_13.xyz + u_xlat16_13.xyz));
    (u_xlat16_14.xyz = (u_xlat16_14.xyz * _CharacterLocalMainLightColor1.xyz));
    // u_xlat16_14 = 0

    (u_xlatb3.xyz = lessThan(u_xlat16_13.xyzx, vec4(0.5, 0.5, 0.5, 0.0)).xyz);
    {
        vec3 hlslcc_movcTemp = u_xlat16_11;
        (hlslcc_movcTemp.x = ((u_xlatb3.x) ? (u_xlat16_14.x) : (u_xlat16_11.x)));
        (hlslcc_movcTemp.y = ((u_xlatb3.y) ? (u_xlat16_14.y) : (u_xlat16_11.y)));
        (hlslcc_movcTemp.z = ((u_xlatb3.z) ? (u_xlat16_14.z) : (u_xlat16_11.z)));
        (u_xlat16_11 = hlslcc_movcTemp);
    }
    (u_xlat16_23.xyz = (((-u_xlat16_23.xyz) * u_xlat1.xyz) + u_xlat16_11.xyz));
    //u_xlat16_23 == 0
    //u_xlat3 = normal - 0
    (u_xlat3.xyz = (vs_TEXCOORD2.xyz + (-_NewLocalLightCharCenter.xyz)));
    (u_xlat46 = dot(u_xlat3.xyz, u_xlat3.xyz));
    (u_xlat46 = inversesqrt(u_xlat46));
    (u_xlat3.xyz = (vec3(u_xlat46) * u_xlat3.xyz));

    (u_xlat46 = dot(u_xlat3.xyz, _NewLocalLightDir.xyz));
    //u_xlat46 = 0
    (u_xlat16_11.x = ((u_xlat46 * 0.5) + 0.5));
    //u_xlat16_12 = Normal
    (u_xlat46 = dot(u_xlat16_12.xyz, _NewLocalLightDir.xyz));
    (u_xlat16_26 = (u_xlat46 + 0.5));
    (u_xlat16_26 = (u_xlat16_26 * 0.66666669));
    (u_xlat16_26 = clamp(u_xlat16_26, 0.0, 1.0));
    (u_xlat16_41 = ((u_xlat16_26 * -2.0) + 3.0));
    (u_xlat16_26 = (u_xlat16_26 * u_xlat16_26));
    (u_xlat16_26 = (u_xlat16_26 * u_xlat16_41));
    (u_xlat46 = ((-_CharacterLocalMainLightColor1.w) + 1.0));
    (u_xlat46 = (u_xlat16_26 * u_xlat46));
    (u_xlat46 = ((_CharacterLocalMainLightColor1.w * u_xlat16_11.x) + u_xlat46));

    (u_xlat3.xy = (vec2(u_xlat46) * _NewLocalLightStrength.xy));
    (u_xlat46 = (u_xlat16_8.x * u_xlat3.x));
    (u_xlat3.xyz = (u_xlat3.yyy * _CharacterLocalMainLightColor2.xyz));
    (u_xlat16_23.xyz = ((vec3(u_xlat46) * u_xlat16_23.xyz) + u_xlat16_13.xyz));
    debugColor = _CharacterLocalMainLightColor2.xyz;
    (u_xlat3.xyz = ((u_xlat3.xyz * u_xlat16_8.xxx) + u_xlat16_23.xyz));


    (u_xlat9.xyz = (u_xlat16_12.yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz));
    (u_xlat9.xyz = ((hlslcc_mtx4x4unity_MatrixV[0].xyz * u_xlat16_12.xxx) + u_xlat9.xyz));
    (u_xlat9.xyz = ((hlslcc_mtx4x4unity_MatrixV[2].xyz * u_xlat16_12.zzz) + u_xlat9.xyz));
    //vs_TEXCOORD4=viewDirOS
    (u_xlat16_8.x = dot(vs_TEXCOORD4.xyz, vs_TEXCOORD4.xyz));
    (u_xlat16_8.x = inversesqrt(u_xlat16_8.x));
    (u_xlat16_8.xyz = (u_xlat16_8.xxx * vs_TEXCOORD4.xyz));

    (u_xlat10.xyz = (u_xlat16_8.yyy * hlslcc_mtx4x4unity_MatrixV[1].xyz));
    (u_xlat10.xyz = ((hlslcc_mtx4x4unity_MatrixV[0].xyz * u_xlat16_8.xxx) + u_xlat10.xyz));
    (u_xlat10.xyz = ((hlslcc_mtx4x4unity_MatrixV[2].xyz * u_xlat16_8.zzz) + u_xlat10.xyz));
    (u_xlat16_8.xyz = (u_xlat10.xyz + (-_RimShadowOffset.xyz)));
    (u_xlat16_53 = dot(u_xlat16_8.xyz, u_xlat16_8.xyz));
    (u_xlat16_53 = inversesqrt(u_xlat16_53));
    (u_xlat16_8.xyz = (vec3(u_xlat16_53) * u_xlat16_8.xyz));
    //u_xlat16_8.x = NdotV
    (u_xlat16_8.x = dot(u_xlat9.xyz, u_xlat16_8.xyz));


    (u_xlat16_8.x = clamp(u_xlat16_8.x, 0.0, 1.0));
    (u_xlat16_8.x = ((-u_xlat16_8.x) + 1.0));
    (u_xlat16_8.x = max(u_xlat16_8.x, 0.001));
    //pow(u_xlat16_8.x,_RimShadowCt)
    (u_xlat16_8.x = log2(u_xlat16_8.x));
    (u_xlat16_8.x = (u_xlat16_8.x * _RimShadowCt));
    (u_xlat16_8.x = exp2(u_xlat16_8.x));

    (u_xlat16_8.x = (u_xlat16_8.x * _RimShadowWidth0));
    (u_xlat16_8.x = clamp(u_xlat16_8.x, 0.0, 1.0));
    //smoothstep
    (u_xlat16_8.x = (u_xlat16_8.x + (-_RimShadowFeather0)));
    (u_xlat16_23.x = ((-_RimShadowFeather0) + 1.0));
    (u_xlat16_23.x = (1.0 / u_xlat16_23.x));
    (u_xlat16_8.x = (u_xlat16_23.x * u_xlat16_8.x));
    (u_xlat16_8.x = clamp(u_xlat16_8.x, 0.0, 1.0));
    (u_xlat16_23.x = ((u_xlat16_8.x * -2.0) + 3.0));
    (u_xlat16_8.x = (u_xlat16_8.x * u_xlat16_8.x));
    (u_xlat16_8.x = (u_xlat16_8.x * u_xlat16_23.x));


    (u_xlat16_8.x = (u_xlat16_8.x * _RimShadowIntensity));
    (u_xlat16_8.x = (u_xlat16_8.x * _ES_RimShadowIntensity));
    (u_xlat16_8.x = (u_xlat16_8.x * 0.25));
    (u_xlat16_23.xyz = (_ES_RimShadowColor.www * _ES_RimShadowColor.xyz));
    (u_xlat16_23.xyz = (u_xlat16_23.xyz * _RimShadowColor0.xyz));
    (u_xlat16_23.xyz = ((u_xlat16_23.xyz * vec3(2.0, 2.0, 2.0)) + vec3(-1.0, -1.0, -1.0)));

    (u_xlat16_8.xyz = ((u_xlat16_8.xxx * u_xlat16_23.xyz) + vec3(1.0, 1.0, 1.0)));

    (SV_Target0.xyz = (u_xlat3.xyz * u_xlat16_8.xyz));

    (SV_Target0.xyz = debugColor);
    (SV_Target0.w = u_xlat1.x);
    (u_xlat1.x = dot(vec3(1.0, 1.0, 1.0), abs(vs_TEXCOORD3.xyz)));
    (u_xlat1.xw = (vs_TEXCOORD3.xy / u_xlat1.xx));
    (u_xlatb3.xy = greaterThanEqual(u_xlat1.xwxx, vec4(0.0, 0.0, 0.0, 0.0)).xy);
    (u_xlat3.x = ((u_xlatb3.x) ? (1.0) : (-1.0)));
    (u_xlat3.y = ((u_xlatb3.y) ? (1.0) : (-1.0)));
    (u_xlat33.xy = ((-abs(u_xlat1.wx)) + vec2(1.0, 1.0)));
    (u_xlat3.xy = (u_xlat3.xy * u_xlat33.xy));
    (u_xlatb33 = (0.0 >= vs_TEXCOORD3.z));
    (u_xlat1.xw = ((bool(u_xlatb33)) ? (u_xlat3.xy) : (u_xlat1.xw)));
    (u_xlat0.xy = ((u_xlat1.xw * vec2(0.5, 0.5)) + vec2(0.5, 0.5)));
    (u_xlat16_8.x = ((u_xlat1.z * 127.0) + 128.0));
    (u_xlat0.w = u_xlat1.y);
    (u_xlat1.x = trunc(u_xlat16_8.x));
    (u_xlat0.z = (u_xlat1.x * 0.0039215689));
    (SV_Target1 = u_xlat0);
    (SV_Target2 = hlslcc_FragCoord.z);
    return;
}