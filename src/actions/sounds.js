// import React from 'react';
import Tone from 'tone';
export const MEMBRANE = new Tone.MembraneSynth().toMaster();
export const NOISE = new Tone.NoiseSynth().toMaster();
export const METAL = new Tone.MetalSynth({ volume : -6 }).toMaster();
