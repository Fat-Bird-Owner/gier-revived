uniform sampler2D u_noise;
uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform vec2 u_campos;
uniform float u_time;

varying vec2 v_texCoords;

void main(){

    vec2 coords = v_texCoords * u_resolution + u_campos;
    //coords = floor(coords);

    float noise = texture2D(
        u_noise,
        coords / 300.0
    ).r;

    vec4 color = texture2D(u_texture, v_texCoords);

    float alpha = 1.0 - ((noise * 2.75) - 0.75);

    color.a *= alpha;
    color.a = smoothstep(0.05, 0.2, color.a);
	if (color.a >= 0.3) color.a = 1.0;
    
    color.rgb *= floor((1.3 - ((noise * 2.6) - 0.5))*6.0) / 6.0;

    gl_FragColor = color;
}
