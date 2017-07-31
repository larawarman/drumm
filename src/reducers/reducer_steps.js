import { UPDATE_STEPS } from '../actions'

export default function(
  state =
    [
      [
        { step: 1,
          hits: [
            { name: 'kick_p1s1', sound: 'kick', activated: true },
            { name: 'snare_p1s1', sound: 'snare', activated: false },
            { name: 'openHat_p1s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s1', sound: 'closedHat', activated: false }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p1s2', sound: 'kick', activated: false },
            { name: 'snare_p1s2', sound: 'snare', activated: false },
            { name: 'openHat_p1s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s2', sound: 'closedHat', activated: true }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p1s3', sound: 'kick', activated: true },
            { name: 'snare_p1s3', sound: 'snare', activated: false },
            { name: 'openHat_p1s3', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s3', sound: 'closedHat', activated: false }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p1s4', sound: 'kick', activated: false },
            { name: 'snare_p1s4', sound: 'snare', activated: false },
            { name: 'openHat_p1s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s4', sound: 'closedHat', activated: true }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p1s5', sound: 'kick', activated: true },
            { name: 'snare_p1s5', sound: 'snare', activated: false },
            { name: 'openHat_p1s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s5', sound: 'closedHat', activated: false }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p1s6', sound: 'kick', activated: false },
            { name: 'snare_p1s6', sound: 'snare', activated: false },
            { name: 'openHat_p1s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s6', sound: 'closedHat', activated: true }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p1s7', sound: 'kick', activated: true },
            { name: 'snare_p1s7', sound: 'snare', activated: false },
            { name: 'openHat_p1s7', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s7', sound: 'closedHat', activated: false }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p1s8', sound: 'kick', activated: false },
            { name: 'snare_p1s8', sound: 'snare', activated: false },
            { name: 'openHat_p1s8', sound: 'openHat', activated: false },
            { name: 'closedHat_p1s8', sound: 'closedHat', activated: true }
          ]
        }
      ],
      [
        { step: 1,
          hits: [
            { name: 'kick_p2s1', sound: 'kick', activated: true },
            { name: 'snare_p2s1', sound: 'snare', activated: false },
            { name: 'openHat_p2s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s1', sound: 'closedHat', activated: false }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p2s2', sound: 'kick', activated: false },
            { name: 'snare_p2s2', sound: 'snare', activated: false },
            { name: 'openHat_p2s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s2', sound: 'closedHat', activated: true }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p2s3', sound: 'kick', activated: true },
            { name: 'snare_p2s3', sound: 'snare', activated: true },
            { name: 'openHat_p2s3', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s3', sound: 'closedHat', activated: false }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p2s4', sound: 'kick', activated: false },
            { name: 'snare_p2s4', sound: 'snare', activated: false },
            { name: 'openHat_p2s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s4', sound: 'closedHat', activated: true }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p2s5', sound: 'kick', activated: true },
            { name: 'snare_p2s5', sound: 'snare', activated: false },
            { name: 'openHat_p2s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s5', sound: 'closedHat', activated: false }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p2s6', sound: 'kick', activated: false },
            { name: 'snare_p2s6', sound: 'snare', activated: false },
            { name: 'openHat_p2s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s6', sound: 'closedHat', activated: true }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p2s7', sound: 'kick', activated: true },
            { name: 'snare_p2s7', sound: 'snare', activated: true },
            { name: 'openHat_p2s7', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s7', sound: 'closedHat', activated: false }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p2s8', sound: 'kick', activated: false },
            { name: 'snare_p2s8', sound: 'snare', activated: false },
            { name: 'openHat_p2s8', sound: 'openHat', activated: false },
            { name: 'closedHat_p2s8', sound: 'closedHat', activated: true }
          ]
        }
      ],
      [
        { step: 1,
          hits: [
            { name: 'kick_p3s1', sound: 'kick', activated: true },
            { name: 'snare_p3s1', sound: 'snare', activated: false },
            { name: 'openHat_p3s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p3s1', sound: 'closedHat', activated: true }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p3s2', sound: 'kick', activated: false },
            { name: 'snare_p3s2', sound: 'snare', activated: false },
            { name: 'openHat_p3s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p3s2', sound: 'closedHat', activated: false }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p3s3', sound: 'kick', activated: false },
            { name: 'snare_p3s3', sound: 'snare', activated: false },
            { name: 'openHat_p3s3', sound: 'openHat', activated: true },
            { name: 'closedHat_p3s3', sound: 'closedHat', activated: false }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p3s4', sound: 'kick', activated: false },
            { name: 'snare_p3s4', sound: 'snare', activated: false },
            { name: 'openHat_p3s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p3s4', sound: 'closedHat', activated: false }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p3s5', sound: 'kick', activated: true },
            { name: 'snare_p3s5', sound: 'snare', activated: true },
            { name: 'openHat_p3s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p3s5', sound: 'closedHat', activated: true }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p3s6', sound: 'kick', activated: false },
            { name: 'snare_p3s6', sound: 'snare', activated: false },
            { name: 'openHat_p3s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p3s6', sound: 'closedHat', activated: false }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p3s7', sound: 'kick', activated: false },
            { name: 'snare_p3s7', sound: 'snare', activated: false },
            { name: 'openHat_p3s7', sound: 'openHat', activated: true },
            { name: 'closedHat_p3s7', sound: 'closedHat', activated: false }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p3s8', sound: 'kick', activated: false },
            { name: 'snare_p3s8', sound: 'snare', activated: false },
            { name: 'openHat_p3s8', sound: 'openHat', activated: false },
            { name: 'closedHat_p3s8', sound: 'closedHat', activated: false }
          ]
        }
      ],
      [
        { step: 1,
          hits: [
            { name: 'kick_p4s1', sound: 'kick', activated: true },
            { name: 'snare_p4s1', sound: 'snare', activated: false },
            { name: 'openHat_p4s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s1', sound: 'closedHat', activated: true }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p4s2', sound: 'kick', activated: false },
            { name: 'snare_p4s2', sound: 'snare', activated: false },
            { name: 'openHat_p4s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s2', sound: 'closedHat', activated: false }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p4s3', sound: 'kick', activated: false },
            { name: 'snare_p4s3', sound: 'snare', activated: true },
            { name: 'openHat_p4s3', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s3', sound: 'closedHat', activated: true }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p4s4', sound: 'kick', activated: false },
            { name: 'snare_p4s4', sound: 'snare', activated: false },
            { name: 'openHat_p4s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s4', sound: 'closedHat', activated: false }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p4s5', sound: 'kick', activated: true },
            { name: 'snare_p4s5', sound: 'snare', activated: false },
            { name: 'openHat_p4s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s5', sound: 'closedHat', activated: true }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p4s6', sound: 'kick', activated: true },
            { name: 'snare_p4s6', sound: 'snare', activated: false },
            { name: 'openHat_p4s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s6', sound: 'closedHat', activated: false }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p4s7', sound: 'kick', activated: false },
            { name: 'snare_p4s7', sound: 'snare', activated: true },
            { name: 'openHat_p4s7', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s7', sound: 'closedHat', activated: true }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p4s8', sound: 'kick', activated: false },
            { name: 'snare_p4s8', sound: 'snare', activated: false },
            { name: 'openHat_p4s8', sound: 'openHat', activated: false },
            { name: 'closedHat_p4s8', sound: 'closedHat', activated: true }
          ]
        }
      ],
      [
        { step: 1,
          hits: [
            { name: 'kick_p5s1', sound: 'kick', activated: true },
            { name: 'snare_p5s1', sound: 'snare', activated: false },
            { name: 'openHat_p5s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p5s1', sound: 'closedHat', activated: false }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p5s2', sound: 'kick', activated: false },
            { name: 'snare_p5s2', sound: 'snare', activated: false },
            { name: 'openHat_p5s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p5s2', sound: 'closedHat', activated: true }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p5s3', sound: 'kick', activated: false },
            { name: 'snare_p5s3', sound: 'snare', activated: true },
            { name: 'openHat_p5s3', sound: 'openHat', activated: false },
            { name: 'closedHat_p5s3', sound: 'closedHat', activated: false }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p5s4', sound: 'kick', activated: false },
            { name: 'snare_p5s4', sound: 'snare', activated: false },
            { name: 'openHat_p5s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p5s4', sound: 'closedHat', activated: true }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p5s5', sound: 'kick', activated: true },
            { name: 'snare_p5s5', sound: 'snare', activated: false },
            { name: 'openHat_p5s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p5s5', sound: 'closedHat', activated: false }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p5s6', sound: 'kick', activated: false },
            { name: 'snare_p5s6', sound: 'snare', activated: false },
            { name: 'openHat_p5s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p5s6', sound: 'closedHat', activated: true }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p5s7', sound: 'kick', activated: false },
            { name: 'snare_p5s7', sound: 'snare', activated: true },
            { name: 'openHat_p5s7', sound: 'openHat', activated: false },
            { name: 'closedHat_p5s7', sound: 'closedHat', activated: false }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p5s8', sound: 'kick', activated: false },
            { name: 'snare_p5s8', sound: 'snare', activated: false },
            { name: 'openHat_p5s8', sound: 'openHat', activated: true },
            { name: 'closedHat_p5s8', sound: 'closedHat', activated: false }
          ]
        }
      ],
      [
        { step: 1,
          hits: [
            { name: 'kick_p6s1', sound: 'kick', activated: true },
            { name: 'snare_p6s1', sound: 'snare', activated: false },
            { name: 'openHat_p6s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s1', sound: 'closedHat', activated: false }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p6s2', sound: 'kick', activated: true },
            { name: 'snare_p6s2', sound: 'snare', activated: false },
            { name: 'openHat_p6s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s2', sound: 'closedHat', activated: true }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p6s3', sound: 'kick', activated: false },
            { name: 'snare_p6s3', sound: 'snare', activated: true },
            { name: 'openHat_p6s3', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s3', sound: 'closedHat', activated: false }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p6s4', sound: 'kick', activated: true },
            { name: 'snare_p6s4', sound: 'snare', activated: false },
            { name: 'openHat_p6s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s4', sound: 'closedHat', activated: false }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p6s5', sound: 'kick', activated: false },
            { name: 'snare_p6s5', sound: 'snare', activated: false },
            { name: 'openHat_p6s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s5', sound: 'closedHat', activated: true }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p6s6', sound: 'kick', activated: false },
            { name: 'snare_p6s6', sound: 'snare', activated: true },
            { name: 'openHat_p6s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s6', sound: 'closedHat', activated: false }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p6s7', sound: 'kick', activated: true },
            { name: 'snare_p6s7', sound: 'snare', activated: false },
            { name: 'openHat_p6s7', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s7', sound: 'closedHat', activated: false }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p6s8', sound: 'kick', activated: false },
            { name: 'snare_p6s8', sound: 'snare', activated: false },
            { name: 'openHat_p6s8', sound: 'openHat', activated: false },
            { name: 'closedHat_p6s8', sound: 'closedHat', activated: true }
          ]
        }
      ],
      [
        { step: 1,
          hits: [
            { name: 'kick_p7s1', sound: 'kick', activated: true },
            { name: 'snare_p7s1', sound: 'snare', activated: false },
            { name: 'openHat_p7s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s1', sound: 'closedHat', activated: false }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p7s2', sound: 'kick', activated: false },
            { name: 'snare_p7s2', sound: 'snare', activated: false },
            { name: 'openHat_p7s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s2', sound: 'closedHat', activated: true }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p7s3', sound: 'kick', activated: false },
            { name: 'snare_p7s3', sound: 'snare', activated: false },
            { name: 'openHat_p7s3', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s3', sound: 'closedHat', activated: true }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p7s4', sound: 'kick', activated: false },
            { name: 'snare_p7s4', sound: 'snare', activated: false },
            { name: 'openHat_p7s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s4', sound: 'closedHat', activated: true }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p7s5', sound: 'kick', activated: false },
            { name: 'snare_p7s5', sound: 'snare', activated: true },
            { name: 'openHat_p7s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s5', sound: 'closedHat', activated: false }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p7s6', sound: 'kick', activated: false },
            { name: 'snare_p7s6', sound: 'snare', activated: false },
            { name: 'openHat_p7s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s6', sound: 'closedHat', activated: true }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p7s7', sound: 'kick', activated: true },
            { name: 'snare_p7s7', sound: 'snare', activated: false },
            { name: 'openHat_p7s7', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s7', sound: 'closedHat', activated: false }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p7s8', sound: 'kick', activated: false },
            { name: 'snare_p7s8', sound: 'snare', activated: false },
            { name: 'openHat_p7s8', sound: 'openHat', activated: false },
            { name: 'closedHat_p7s8', sound: 'closedHat', activated: true }
          ]
        }
      ],
      [
        { step: 1,
          hits: [
            { name: 'kick_p8s1', sound: 'kick', activated: false },
            { name: 'snare_p8s1', sound: 'snare', activated: false },
            { name: 'openHat_p8s1', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s1', sound: 'closedHat', activated: false }
          ]
        },
        { step: 2,
          hits: [
            { name: 'kick_p8s2', sound: 'kick', activated: false },
            { name: 'snare_p8s2', sound: 'snare', activated: false },
            { name: 'openHat_p8s2', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s2', sound: 'closedHat', activated: false }
          ]
        },
        { step: 3,
          hits: [
            { name: 'kick_p8s3', sound: 'kick', activated: false },
            { name: 'snare_p8s3', sound: 'snare', activated: false },
            { name: 'openHat_p8s3', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s3', sound: 'closedHat', activated: false }
          ]
        },
        { step: 4,
          hits: [
            { name: 'kick_p8s4', sound: 'kick', activated: false },
            { name: 'snare_p8s4', sound: 'snare', activated: false },
            { name: 'openHat_p8s4', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s4', sound: 'closedHat', activated: false }
          ]
        },
        { step: 5,
          hits: [
            { name: 'kick_p8s5', sound: 'kick', activated: false },
            { name: 'snare_p8s5', sound: 'snare', activated: false },
            { name: 'openHat_p8s5', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s5', sound: 'closedHat', activated: false }
          ]
        },
        { step: 6,
          hits: [
            { name: 'kick_p8s6', sound: 'kick', activated: false },
            { name: 'snare_p8s6', sound: 'snare', activated: false },
            { name: 'openHat_p8s6', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s6', sound: 'closedHat', activated: false }
          ]
        },
        { step: 7,
          hits: [
            { name: 'kick_p8s7', sound: 'kick', activated: false },
            { name: 'snare_p8s7', sound: 'snare', activated: false },
            { name: 'openHat_p8s7', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s7', sound: 'closedHat', activated: false }
          ]
        },
        { step: 8,
          hits: [
            { name: 'kick_p8s8', sound: 'kick', activated: false },
            { name: 'snare_p8s8', sound: 'snare', activated: false },
            { name: 'openHat_p8s8', sound: 'openHat', activated: false },
            { name: 'closedHat_p8s8', sound: 'closedHat', activated: false }
          ]
        }
      ]
    ],
  action) {
    switch (action.type) {
      case UPDATE_STEPS:
        return action.payload
      default:
        break;
  }
  return state;
}
