﻿Shader "Hidden/DodHeightMap"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" { }
    }
    SubShader
    {
        Tags { "RenderType" = "Opaque" }
        // 正面剔除 防止发生自阴影遮挡
        // Cull front
        Pass
        {
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            struct v2f
            {
                float4 vertex : SV_POSITION;
                float2 depth : TEXCOORD0;
            };

            v2f vert(appdata_base v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.depth = o.vertex.zw;
                return o;
            }
         
            fixed4 frag(v2f i) : SV_Target
            {
                float depth = i.depth.x / i.depth.y;
                #if defined(SHADER_TARGET_GLSL)
                    depth = depth * 0.5 + 0.5; //(-1, 1)-->(0, 1)
                #elif defined(UNITY_REVERSED_Z)
                    depth = 1 - depth;       //(1, 0)-->(0, 1)
                #endif
                return EncodeFloatRGBA(depth);
            }
            ENDCG

        }
    }
}
