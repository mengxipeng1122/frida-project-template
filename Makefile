

all:


build_frida:
	frida-compile agent/index.ts -o agent.js
