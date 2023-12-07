'use client'
import React, { useState } from 'react'

const ColorPicker = () => {
    const COLORS = [
        {
          "paletteName": "gray",
          "swatches": [
            {
              "name": "100",
              "color": "#f7fafc"
            },
            {
              "name": "200",
              "color": "#edf2f7"
            },
            {
              "name": "300",
              "color": "#e2e8f0"
            },
            {
              "name": "400",
              "color": "#cbd5e0"
            },
            {
              "name": "500",
              "color": "#a0aec0"
            },
            {
              "name": "600",
              "color": "#718096"
            },
            {
              "name": "700",
              "color": "#4a5568"
            },
            {
              "name": "800",
              "color": "#2d3748"
            },
            {
              "name": "900",
              "color": "#1a202c"
            }
          ]
        },
        {
          "paletteName": "red",
          "swatches": [
            {
              "name": "100",
              "color": "#fff5f5"
            },
            {
              "name": "200",
              "color": "#fed7d7"
            },
            {
              "name": "300",
              "color": "#feb2b2"
            },
            {
              "name": "400",
              "color": "#fc8181"
            },
            {
              "name": "500",
              "color": "#f56565"
            },
            {
              "name": "600",
              "color": "#e53e3e"
            },
            {
              "name": "700",
              "color": "#c53030"
            },
            {
              "name": "800",
              "color": "#9b2c2c"
            },
            {
              "name": "900",
              "color": "#742a2a"
            }
          ]
        },
        {
          "paletteName": "orange",
          "swatches": [
            {
              "name": "100",
              "color": "#fffaf0"
            },
            {
              "name": "200",
              "color": "#feebc8"
            },
            {
              "name": "300",
              "color": "#fbd38d"
            },
            {
              "name": "400",
              "color": "#f6ad55"
            },
            {
              "name": "500",
              "color": "#ed8936"
            },
            {
              "name": "600",
              "color": "#dd6b20"
            },
            {
              "name": "700",
              "color": "#c05621"
            },
            {
              "name": "800",
              "color": "#9c4221"
            },
            {
              "name": "900",
              "color": "#7b341e"
            }
          ]
        },
        {
          "paletteName": "yellow",
          "swatches": [
            {
              "name": "100",
              "color": "#fffff0"
            },
            {
              "name": "200",
              "color": "#fefcbf"
            },
            {
              "name": "300",
              "color": "#faf089"
            },
            {
              "name": "400",
              "color": "#f6e05e"
            },
            {
              "name": "500",
              "color": "#ecc94b"
            },
            {
              "name": "600",
              "color": "#d69e2e"
            },
            {
              "name": "700",
              "color": "#b7791f"
            },
            {
              "name": "800",
              "color": "#975a16"
            },
            {
              "name": "900",
              "color": "#744210"
            }
          ]
        },
        {
          "paletteName": "green",
          "swatches": [
            {
              "name": "100",
              "color": "#f0fff4"
            },
            {
              "name": "200",
              "color": "#c6f6d5"
            },
            {
              "name": "300",
              "color": "#9ae6b4"
            },
            {
              "name": "400",
              "color": "#68d391"
            },
            {
              "name": "500",
              "color": "#48bb78"
            },
            {
              "name": "600",
              "color": "#38a169"
            },
            {
              "name": "700",
              "color": "#2f855a"
            },
            {
              "name": "800",
              "color": "#276749"
            },
            {
              "name": "900",
              "color": "#22543d"
            }
          ]
        },
        {
          "paletteName": "teal",
          "swatches": [
            {
              "name": "100",
              "color": "#e6fffa"
            },
            {
              "name": "200",
              "color": "#b2f5ea"
            },
            {
              "name": "300",
              "color": "#81e6d9"
            },
            {
              "name": "400",
              "color": "#4fd1c5"
            },
            {
              "name": "500",
              "color": "#38b2ac"
            },
            {
              "name": "600",
              "color": "#319795"
            },
            {
              "name": "700",
              "color": "#2c7a7b"
            },
            {
              "name": "800",
              "color": "#285e61"
            },
            {
              "name": "900",
              "color": "#234e52"
            }
          ]
        },
        {
          "paletteName": "blue",
          "swatches": [
            {
              "name": "100",
              "color": "#ebf8ff"
            },
            {
              "name": "200",
              "color": "#bee3f8"
            },
            {
              "name": "300",
              "color": "#90cdf4"
            },
            {
              "name": "400",
              "color": "#63b3ed"
            },
            {
              "name": "500",
              "color": "#4299e1"
            },
            {
              "name": "600",
              "color": "#3182ce"
            },
            {
              "name": "700",
              "color": "#2b6cb0"
            },
            {
              "name": "800",
              "color": "#2c5282"
            },
            {
              "name": "900",
              "color": "#2a4365"
            }
          ]
        },
        {
          "paletteName": "indigo",
          "swatches": [
            {
              "name": "100",
              "color": "#ebf4ff"
            },
            {
              "name": "200",
              "color": "#c3dafe"
            },
            {
              "name": "300",
              "color": "#a3bffa"
            },
            {
              "name": "400",
              "color": "#7f9cf5"
            },
            {
              "name": "500",
              "color": "#667eea"
            },
            {
              "name": "600",
              "color": "#5a67d8"
            },
            {
              "name": "700",
              "color": "#4c51bf"
            },
            {
              "name": "800",
              "color": "#434190"
            },
            {
              "name": "900",
              "color": "#3c366b"
            }
          ]
        },
        {
          "paletteName": "purple",
          "swatches": [
            {
              "name": "100",
              "color": "#faf5ff"
            },
            {
              "name": "200",
              "color": "#e9d8fd"
            },
            {
              "name": "300",
              "color": "#d6bcfa"
            },
            {
              "name": "400",
              "color": "#b794f4"
            },
            {
              "name": "500",
              "color": "#9f7aea"
            },
            {
              "name": "600",
              "color": "#805ad5"
            },
            {
              "name": "700",
              "color": "#6b46c1"
            },
            {
              "name": "800",
              "color": "#553c9a"
            },
            {
              "name": "900",
              "color": "#44337a"
            }
          ]
        },
        {
          "paletteName": "pink",
          "swatches": [
            {
              "name": "100",
              "color": "#fff5f7"
            },
            {
              "name": "200",
              "color": "#fed7e2"
            },
            {
              "name": "300",
              "color": "#fbb6ce"
            },
            {
              "name": "400",
              "color": "#f687b3"
            },
            {
              "name": "500",
              "color": "#ed64a6"
            },
            {
              "name": "600",
              "color": "#d53f8c"
            },
            {
              "name": "700",
              "color": "#b83280"
            },
            {
              "name": "800",
              "color": "#97266d"
            },
            {
              "name": "900",
              "color": "#702459"
            }
          ]
        }
      ]
    function hex(c: any) {
        var s = "0123456789abcdef";
        var i = parseInt(c);
      
        if (i == 0 || isNaN(c))
          return "00";
      
        i = Math.round(Math.min(Math.max(0, i), 255));
        return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
      }
      
      /* Convert an RGB triplet to a hex string */
      function convertToHex(rgb: any) {
        return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
      }
      
      /* Remove '#' in color hex string */
      function trim(s: any) {
        return (s.charAt(0) == '#') ? s.substring(1, 7) : s
      }
      
      /* Convert a hex string to an RGB triplet */
      function convertToRGB(hex: string) {
        var color = [];
        color[0] = parseInt((trim(hex)).substring(0, 2), 16);
        color[1] = parseInt((trim(hex)).substring(2, 4), 16);
        color[2] = parseInt((trim(hex)).substring(4, 6), 16);
        return color;
      }
      
      function generateColor(colorStart: string, colorEnd: string, colorCount: number) {
      
        // The beginning of your gradient
        var start = convertToRGB(colorStart);
      
        // The end of your gradient
        var end = convertToRGB(colorEnd);
      
        // The number of colors to compute
        var len = colorCount;
      
        //Alpha blending amount
        var alpha = 0.0;
      
        var saida = [];
      
        for (let i = 0; i < len; i++) {
          var c = [];
          alpha += (1.0 / len);
      
          c[0] = start[0] * alpha + (1 - alpha) * end[0];
          c[1] = start[1] * alpha + (1 - alpha) * end[1];
          c[2] = start[2] * alpha + (1 - alpha) * end[2];
      
          saida.push(convertToHex(c));
      
        }
      
        return saida;
      }
    const handleChangeBg = (colorCode: string) => {
        const colorList = generateColor(colorCode, '#FFFFFF', 10)
        const colors = colorList
        let bg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23${colors[9]}' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23${colors[8]}' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23${colors[7]}' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23${colors[6]}' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23${colors[5]}' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23${colors[4]}' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23${colors[3]}' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23${colors[2]}' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23${colors[1]}' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23${colors[0]}' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`
        document.body.style.backgroundImage = bg
    }
    const [paletteName, setPaletteName] = useState(0)
    const [toggle, setToggle] = useState(false)
  return (
    <div className={`fixed top-2 px-2 py-2 left-5 z-50 bg-zinc-900/30 flex space-x-2 justify-center items-center rounded-md ${ toggle ? '' : '-translate-x-[96%]'} transition-all duration-300`}>
        <div className='flex flex-col space-y-2'>
            <div className='flex space-x-3 px-2'>
                {
                    COLORS.map((item, key) => (
                        <span key={key} onClick={() => setPaletteName(key)} style={{
                            backgroundColor: item.swatches[5].color
                        }} className={`cursor-pointer rounded-lg text-white px-3 py-1.5 ${key === paletteName ? 'border-t-4 border-zinc-800' : ''}`}> {item.paletteName}</span>
                    ))
                }
            </div>
            <div className='w-full flex space-x-1'>
                {
                    COLORS[paletteName].swatches.map((item, key) => (
                        <div key={key} className='w-full cursor-pointer' onClick={() => handleChangeBg(item.color)}>
                            <div style={{
                            backgroundColor: item.color
                        }} className='w-full h-5'></div>
                        <span>{ item.name }</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div onClick={() => setToggle(!toggle)} className='p-1.5 cursor-pointer hover:bg-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${ toggle ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    </div>
  )
}

export default ColorPicker