const numericalQuestions = [
    {
        "id": 1,
        "topic": "Advanced Algebra",
        "question": "If 2x + 3y = 13 and 4x \u2212 y = 5, find x.",
        "options": [
            {
                "letter": "A",
                "text": "1"
            },
            {
                "letter": "B",
                "text": "2"
            },
            {
                "letter": "C",
                "text": "3"
            },
            {
                "letter": "D",
                "text": "4"
            }
        ],
        "answer_letter": "B",
        "answer_text": "2",
        "solution": "Given:\n2x + 3y = 13\n4x \u2212 y = 5\nFrom second equation:\ny = 4x \u2212 5\nSubstitute:\n2x + 3(4x \u2212 5) = 13\n2x + 12x \u2212 15 = 13\n14x = 28\nx = 2"
    },
    {
        "id": 2,
        "topic": "Advanced Algebra",
        "question": "Solve: x\u00b2 \u2212 7x + 10 = 0",
        "options": [
            {
                "letter": "A",
                "text": "2 & 5"
            },
            {
                "letter": "B",
                "text": "3 & 4"
            },
            {
                "letter": "C",
                "text": "1 & 10"
            },
            {
                "letter": "D",
                "text": "5 & 7"
            }
        ],
        "answer_letter": "A",
        "answer_text": "2 & 5",
        "solution": "x\u00b2 \u2212 7x + 10 = 0\nFactor:\n(x \u2212 5)(x \u2212 2) = 0\nx = 5 or x = 2"
    },
    {
        "id": 3,
        "topic": "Advanced Algebra",
        "question": "If x + 1/x = 6, find x\u00b2 + 1/x\u00b2.",
        "options": [
            {
                "letter": "A",
                "text": "34"
            },
            {
                "letter": "B",
                "text": "35"
            },
            {
                "letter": "C",
                "text": "36"
            },
            {
                "letter": "D",
                "text": "38"
            }
        ],
        "answer_letter": "A",
        "answer_text": "34",
        "solution": "Given:\nx + 1/x = 6\nSquare both sides:\n36 = x\u00b2 + 2 + 1/x\u00b2\nx\u00b2 + 1/x\u00b2 = 36 \u2212 2\n= 34"
    },
    {
        "id": 4,
        "topic": "Advanced Algebra",
        "question": "Solve: 3/x + 2 = 5",
        "options": [
            {
                "letter": "A",
                "text": "1"
            },
            {
                "letter": "B",
                "text": "2"
            },
            {
                "letter": "C",
                "text": "3"
            },
            {
                "letter": "D",
                "text": "4"
            }
        ],
        "answer_letter": "A",
        "answer_text": "1",
        "solution": "3/x + 2 = 5\n3/x = 3\nx = 1"
    },
    {
        "id": 5,
        "topic": "Work, Time & Rates",
        "question": "If 5\u02e3 = 125, find x.",
        "options": [
            {
                "letter": "A",
                "text": "2"
            },
            {
                "letter": "B",
                "text": "3"
            },
            {
                "letter": "C",
                "text": "4"
            },
            {
                "letter": "D",
                "text": "5\n\nPART II \u2013 Work, Time & Rates"
            }
        ],
        "answer_letter": "B",
        "answer_text": "3",
        "solution": "5\u02e3 = 125\n125 = 5\u00b3\nx = 3"
    },
    {
        "id": 6,
        "topic": "Work, Time & Rates",
        "question": "A can finish a job in 12 days, B in 18 days. Together?",
        "options": [
            {
                "letter": "A",
                "text": "6"
            },
            {
                "letter": "B",
                "text": "7.2"
            }
        ],
        "answer_letter": "B",
        "answer_text": "7.2 days",
        "solution": "A's rate = 1/12\nB's rate = 1/18\nTogether:\n1/12 + 1/18 = 5/36\nTime = 36/5\n= 7.2 days"
    },
    {
        "id": 7,
        "topic": "Work, Time & Rates",
        "question": "If 15 workers finish in 8 days, how many workers are needed for 5 days?",
        "options": [
            {
                "letter": "A",
                "text": "20"
            },
            {
                "letter": "B",
                "text": "22"
            },
            {
                "letter": "C",
                "text": "24"
            },
            {
                "letter": "D",
                "text": "25"
            }
        ],
        "answer_letter": "C",
        "answer_text": "24 workers",
        "solution": "Work = workers \u00d7 days\n15 \u00d7 8 = 120 man-days\n120 \u00f7 5\n= 24 workers"
    },
    {
        "id": 8,
        "topic": "Work, Time & Rates",
        "question": "Pipe A fills tank in 4 hrs, B in 6 hrs. Together?",
        "options": [
            {
                "letter": "A",
                "text": "2.4"
            },
            {
                "letter": "B",
                "text": "2.5"
            },
            {
                "letter": "C",
                "text": "3"
            },
            {
                "letter": "D",
                "text": "3.5"
            }
        ],
        "answer_letter": "A",
        "answer_text": "2.4 hours",
        "solution": "Rate:\n1/4 + 1/6 = 5/12\nTime = 12/5\n= 2.4 hours"
    },
    {
        "id": 9,
        "topic": "Work, Time & Rates",
        "question": "A train 150m long passes a man in 10 sec. Speed?",
        "options": [
            {
                "letter": "A",
                "text": "12 m/s"
            },
            {
                "letter": "B",
                "text": "15 m/s"
            },
            {
                "letter": "C",
                "text": "18 m/s"
            },
            {
                "letter": "D",
                "text": "20 m/s"
            }
        ],
        "answer_letter": "B",
        "answer_text": "15 m/s",
        "solution": "Speed = Distance \u00f7 Time\n150 \u00f7 10\n= 15 m/s"
    },
    {
        "id": 10,
        "topic": "Ratio & Mixture",
        "question": "A car travels 80 kph and returns 60 kph. Average speed?",
        "options": [
            {
                "letter": "A",
                "text": "68"
            },
            {
                "letter": "B",
                "text": "69"
            },
            {
                "letter": "C",
                "text": "70"
            },
            {
                "letter": "D",
                "text": "72\n\nPART III \u2013 Ratio & Mixture"
            }
        ],
        "answer_letter": "B",
        "answer_text": "69 kph",
        "solution": "Average speed:\n(2ab)/(a+b)\n= (2\u00d780\u00d760)/(80+60)\n= 9600/140\n= 68.57\n\u2248 69 kph"
    },
    {
        "id": 11,
        "topic": "Ratio & Mixture",
        "question": "Ratio 3:4, sum 140. Larger number?",
        "options": [
            {
                "letter": "A",
                "text": "70"
            },
            {
                "letter": "B",
                "text": "75"
            },
            {
                "letter": "C",
                "text": "80"
            },
            {
                "letter": "D",
                "text": "85"
            }
        ],
        "answer_letter": "C",
        "answer_text": "80",
        "solution": "Ratio = 3:4\nTotal parts = 7\n140 \u00f7 7 = 20\nLarger = 4 \u00d7 20\n= 80"
    },
    {
        "id": 12,
        "topic": "Ratio & Mixture",
        "question": "30L solution 40% alcohol. Alcohol amount?",
        "options": [
            {
                "letter": "A",
                "text": "10L"
            },
            {
                "letter": "B",
                "text": "12L"
            },
            {
                "letter": "C",
                "text": "14L"
            },
            {
                "letter": "D",
                "text": "16L"
            }
        ],
        "answer_letter": "B",
        "answer_text": "12 L",
        "solution": "40% of 30\n= 0.40 \u00d7 30\n= 12 L"
    },
    {
        "id": 13,
        "topic": "Ratio & Mixture",
        "question": "A father is 5 times son's age. Sum 72. Father's age?",
        "options": [
            {
                "letter": "A",
                "text": "50"
            },
            {
                "letter": "B",
                "text": "55"
            },
            {
                "letter": "C",
                "text": "60"
            },
            {
                "letter": "D",
                "text": "65"
            }
        ],
        "answer_letter": "C",
        "answer_text": "60",
        "solution": "Father = 5x\nSon = x\n5x + x = 72\n6x = 72\nx = 12\nFather = 5(12)\n= 60"
    },
    {
        "id": 14,
        "topic": "Ratio & Mixture",
        "question": "Divide 1,200 in ratio 2:3:5. Largest share?",
        "options": [
            {
                "letter": "A",
                "text": "480"
            },
            {
                "letter": "B",
                "text": "500"
            },
            {
                "letter": "C",
                "text": "600"
            },
            {
                "letter": "D",
                "text": "720"
            }
        ],
        "answer_letter": "C",
        "answer_text": "600",
        "solution": "Ratio = 2:3:5\nTotal parts = 10\n1200 \u00f7 10 = 120\nLargest share = 5 \u00d7 120\n= 600"
    },
    {
        "id": 15,
        "topic": "Percent, Profit, Interest",
        "question": "25% of number equals 3/4 of 80. Find number.",
        "options": [
            {
                "letter": "A",
                "text": "200"
            },
            {
                "letter": "B",
                "text": "220"
            },
            {
                "letter": "C",
                "text": "240"
            },
            {
                "letter": "D",
                "text": "260\n\nPART IV \u2013 Percent, Profit, Interest"
            }
        ],
        "answer_letter": "C",
        "answer_text": "240",
        "solution": "25% of x = \u00be of 80\n0.25x = 60\nx = 60 \u00f7 0.25\n= 240"
    },
    {
        "id": 16,
        "topic": "Percent, Profit, Interest",
        "question": "Selling price 2,400 with 20% loss. Cost price?",
        "options": [
            {
                "letter": "A",
                "text": "2,800"
            },
            {
                "letter": "B",
                "text": "2,900"
            },
            {
                "letter": "C",
                "text": "3,000"
            },
            {
                "letter": "D",
                "text": "3,200"
            }
        ],
        "answer_letter": "C",
        "answer_text": "3000",
        "solution": "20% loss means SP = 80% of CP\n2400 = 0.8(CP)\nCP = 2400 \u00f7 0.8\n= 3000"
    },
    {
        "id": 17,
        "topic": "Percent, Profit, Interest",
        "question": "Compound interest of 5,000 at 10% for 2 yrs?",
        "options": [
            {
                "letter": "A",
                "text": "1,000"
            },
            {
                "letter": "B",
                "text": "1,050"
            },
            {
                "letter": "C",
                "text": "1,100"
            },
            {
                "letter": "D",
                "text": "1,200"
            }
        ],
        "answer_letter": "B",
        "answer_text": "1050",
        "solution": "Compound Amount:\n5000(1.10)\u00b2\n= 5000(1.21)\n= 6050\nInterest:\n6050 \u2212 5000\n= 1050"
    },
    {
        "id": 18,
        "topic": "Percent, Profit, Interest",
        "question": "Price increases from 500 to 650. % increase?",
        "options": [
            {
                "letter": "A",
                "text": "25%"
            },
            {
                "letter": "B",
                "text": "28%"
            },
            {
                "letter": "C",
                "text": "30%"
            },
            {
                "letter": "D",
                "text": "32%"
            }
        ],
        "answer_letter": "C",
        "answer_text": "30%",
        "solution": "Increase:\n650 \u2212 500 = 150\n150/500 \u00d7 100\n= 30%"
    },
    {
        "id": 19,
        "topic": "Percent, Profit, Interest",
        "question": "Commission 7% of 85,000?",
        "options": [
            {
                "letter": "A",
                "text": "5,850"
            },
            {
                "letter": "B",
                "text": "5,900"
            },
            {
                "letter": "C",
                "text": "5,950"
            },
            {
                "letter": "D",
                "text": "6,000"
            }
        ],
        "answer_letter": "C",
        "answer_text": "5950",
        "solution": "7% of 85,000\n= 0.07 \u00d7 85,000\n= 5,950"
    },
    {
        "id": 20,
        "topic": "Geometry",
        "question": "If price decreases 15% to 1,700, original price?",
        "options": [
            {
                "letter": "A",
                "text": "1,900"
            },
            {
                "letter": "B",
                "text": "2,000"
            },
            {
                "letter": "C",
                "text": "2,100"
            },
            {
                "letter": "D",
                "text": "2,200\n\nPART V \u2013 Geometry"
            }
        ],
        "answer_letter": "B",
        "answer_text": "2000",
        "solution": "1700 = 85% of original\nOriginal = 1700 \u00f7 0.85\n= 2000"
    },
    {
        "id": 21,
        "topic": "Geometry",
        "question": "Area of circle (r = 14, \u03c0 = 22/7)",
        "options": [
            {
                "letter": "A",
                "text": "616"
            },
            {
                "letter": "B",
                "text": "620"
            },
            {
                "letter": "C",
                "text": "630"
            },
            {
                "letter": "D",
                "text": "640"
            }
        ],
        "answer_letter": "A",
        "answer_text": "616",
        "solution": "Area of circle:\n= (22/7)(14\u00b2)\n= (22/7)(196)\n= 22(28)\n= 616"
    },
    {
        "id": 22,
        "topic": "Geometry",
        "question": "Perimeter rectangle (L = 18, W = 12)",
        "options": [
            {
                "letter": "A",
                "text": "56"
            },
            {
                "letter": "B",
                "text": "60"
            },
            {
                "letter": "C",
                "text": "64"
            },
            {
                "letter": "D",
                "text": "68"
            }
        ],
        "answer_letter": "B",
        "answer_text": "60",
        "solution": "Perimeter:\n2(L + W)\n= 2(18 + 12)\n= 2(30)\n= 60"
    },
    {
        "id": 23,
        "topic": "Geometry",
        "question": "Volume cube (side = 8)",
        "options": [
            {
                "letter": "A",
                "text": "512"
            },
            {
                "letter": "B",
                "text": "520"
            },
            {
                "letter": "C",
                "text": "530"
            },
            {
                "letter": "D",
                "text": "540"
            }
        ],
        "answer_letter": "A",
        "answer_text": "512",
        "solution": "Volume of cube:\n8\u00b3\n= 512"
    },
    {
        "id": 24,
        "topic": "Geometry",
        "question": "Area triangle (b = 20, h = 15)",
        "options": [
            {
                "letter": "A",
                "text": "120"
            },
            {
                "letter": "B",
                "text": "140"
            },
            {
                "letter": "C",
                "text": "150"
            },
            {
                "letter": "D",
                "text": "160"
            }
        ],
        "answer_letter": "C",
        "answer_text": "150",
        "solution": "Area of triangle:\n\u00bdbh\n= \u00bd(20)(15)\n= 150"
    },
    {
        "id": 25,
        "topic": "Number Series",
        "question": "Diagonal square (side = 10)",
        "options": [
            {
                "letter": "A",
                "text": "10\u221a2"
            },
            {
                "letter": "B",
                "text": "12\u221a2"
            },
            {
                "letter": "C",
                "text": "14"
            },
            {
                "letter": "D",
                "text": "20\n\nPART VI \u2013 Number Series"
            }
        ],
        "answer_letter": "A",
        "answer_text": "10\u221a2",
        "solution": "Diagonal of square:\nside\u221a2\n= 10\u221a2"
    },
    {
        "id": 26,
        "topic": "Number Series",
        "question": "2, 6, 14, 30, ?",
        "options": [
            {
                "letter": "A",
                "text": "46"
            },
            {
                "letter": "B",
                "text": "52"
            },
            {
                "letter": "C",
                "text": "62"
            },
            {
                "letter": "D",
                "text": "70"
            }
        ],
        "answer_letter": "C",
        "answer_text": "62",
        "solution": "Pattern:\n\u00d72 + 2\n2 \u2192 6 \u2192 14 \u2192 30\n30\u00d72 + 2\n= 62"
    },
    {
        "id": 27,
        "topic": "Number Series",
        "question": "5, 15, 45, 135, ?",
        "options": [
            {
                "letter": "A",
                "text": "270"
            },
            {
                "letter": "B",
                "text": "375"
            },
            {
                "letter": "C",
                "text": "405"
            },
            {
                "letter": "D",
                "text": "420"
            }
        ],
        "answer_letter": "C",
        "answer_text": "405",
        "solution": "Multiply by 3\n5 \u2192 15 \u2192 45 \u2192 135\n135 \u00d7 3\n= 405"
    },
    {
        "id": 28,
        "topic": "Number Series",
        "question": "1, 4, 10, 22, 46, ?",
        "options": [
            {
                "letter": "A",
                "text": "70"
            },
            {
                "letter": "B",
                "text": "82"
            },
            {
                "letter": "C",
                "text": "94"
            },
            {
                "letter": "D",
                "text": "98"
            }
        ],
        "answer_letter": "C",
        "answer_text": "94",
        "solution": "Pattern:\n\u00d72 + 2\n46 \u00d7 2 + 2\n= 94"
    },
    {
        "id": 29,
        "topic": "Number Series",
        "question": "7, 10, 16, 28, 52, ?",
        "options": [
            {
                "letter": "A",
                "text": "80"
            },
            {
                "letter": "B",
                "text": "88"
            },
            {
                "letter": "C",
                "text": "100"
            },
            {
                "letter": "D",
                "text": "112"
            }
        ],
        "answer_letter": "C",
        "answer_text": "100",
        "solution": "Differences:\n3, 6, 12, 24\nNext difference = 48\n52 + 48\n= 100"
    },
    {
        "id": 30,
        "topic": "Advanced Problems",
        "question": "3, 8, 15, 24, 35, ?",
        "options": [
            {
                "letter": "A",
                "text": "46"
            },
            {
                "letter": "B",
                "text": "48"
            },
            {
                "letter": "C",
                "text": "50"
            },
            {
                "letter": "D",
                "text": "52\n\nPART VII \u2013 Advanced Problems"
            }
        ],
        "answer_letter": "B",
        "answer_text": "48",
        "solution": "Differences:\n5, 7, 9, 11\nNext difference = 13\n35 + 13\n= 48"
    },
    {
        "id": 31,
        "topic": "Advanced Problems",
        "question": "If x \u2212 1/x = 4, find x\u00b2 + 1/x\u00b2",
        "options": [
            {
                "letter": "A",
                "text": "14"
            },
            {
                "letter": "B",
                "text": "16"
            },
            {
                "letter": "C",
                "text": "18"
            },
            {
                "letter": "D",
                "text": "20"
            }
        ],
        "answer_letter": "C",
        "answer_text": "18",
        "solution": "Given:\nx \u2212 1/x = 4\nSquare both sides:\n16 = x\u00b2 + 1/x\u00b2 \u2212 2\nx\u00b2 + 1/x\u00b2 = 18"
    },
    {
        "id": 32,
        "topic": "Advanced Problems",
        "question": "Solve: 2x + 5 = 3x \u2212 7",
        "options": [
            {
                "letter": "A",
                "text": "10"
            },
            {
                "letter": "B",
                "text": "11"
            },
            {
                "letter": "C",
                "text": "12"
            },
            {
                "letter": "D",
                "text": "13"
            }
        ],
        "answer_letter": "C",
        "answer_text": "12",
        "solution": "2x + 5 = 3x \u2212 7\n5 + 7 = x\nx = 12"
    },
    {
        "id": 33,
        "topic": "Advanced Problems",
        "question": "LCM of 36 and 48",
        "options": [
            {
                "letter": "A",
                "text": "96"
            },
            {
                "letter": "B",
                "text": "120"
            },
            {
                "letter": "C",
                "text": "144"
            },
            {
                "letter": "D",
                "text": "168"
            }
        ],
        "answer_letter": "C",
        "answer_text": "144",
        "solution": "36 = 2\u00b2 \u00d7 3\u00b2\n48 = 2\u2074 \u00d7 3\nLCM = 2\u2074 \u00d7 3\u00b2\n= 144"
    },
    {
        "id": 34,
        "topic": "Advanced Problems",
        "question": "GCF of 180 and 252",
        "options": [
            {
                "letter": "A",
                "text": "24"
            },
            {
                "letter": "B",
                "text": "30"
            },
            {
                "letter": "C",
                "text": "36"
            },
            {
                "letter": "D",
                "text": "42"
            }
        ],
        "answer_letter": "C",
        "answer_text": "36",
        "solution": "180 = 2\u00b2 \u00d7 3\u00b2 \u00d7 5\n252 = 2\u00b2 \u00d7 3\u00b2 \u00d7 7\nGCF = 2\u00b2 \u00d7 3\u00b2\n= 36"
    },
    {
        "id": 35,
        "topic": "Challenging Word Problems",
        "question": "If 2\u02e3 = 64, x = ?",
        "options": [
            {
                "letter": "A",
                "text": "4"
            },
            {
                "letter": "B",
                "text": "5"
            },
            {
                "letter": "C",
                "text": "6"
            },
            {
                "letter": "D",
                "text": "7\n\nPART VIII \u2013 Challenging Word Problems"
            }
        ],
        "answer_letter": "C",
        "answer_text": "6",
        "solution": "2\u02e3 = 64\n64 = 2\u2076\nx = 6"
    },
    {
        "id": 36,
        "topic": "Challenging Word Problems",
        "question": "Average of 8 numbers is 30. Remove 40. New average?",
        "options": [
            {
                "letter": "A",
                "text": "28"
            },
            {
                "letter": "B",
                "text": "29"
            },
            {
                "letter": "C",
                "text": "30"
            },
            {
                "letter": "D",
                "text": "31"
            }
        ],
        "answer_letter": "B",
        "answer_text": "29",
        "solution": "Total = 8 \u00d7 30\n= 240\nRemove 40:\n240 \u2212 40 = 200\nNew average:\n200 \u00f7 7\n= 28.57\n\u2248 29"
    },
    {
        "id": 37,
        "topic": "Challenging Word Problems",
        "question": "Two numbers sum 100, difference 20. Larger number?",
        "options": [
            {
                "letter": "A",
                "text": "50"
            },
            {
                "letter": "B",
                "text": "55"
            },
            {
                "letter": "C",
                "text": "60"
            },
            {
                "letter": "D",
                "text": "65"
            }
        ],
        "answer_letter": "C",
        "answer_text": "60",
        "solution": "x + y = 100\nx \u2212 y = 20\nAdd equations:\n2x = 120\nx = 60"
    },
    {
        "id": 38,
        "topic": "Challenging Word Problems",
        "question": "A number divided by 9 gives 12 remainder 5. Number?",
        "options": [
            {
                "letter": "A",
                "text": "110"
            },
            {
                "letter": "B",
                "text": "112"
            },
            {
                "letter": "C",
                "text": "113"
            },
            {
                "letter": "D",
                "text": "115"
            }
        ],
        "answer_letter": "C",
        "answer_text": "113",
        "solution": "Number = (9 \u00d7 12) + 5\n= 113"
    },
    {
        "id": 39,
        "topic": "Challenging Word Problems",
        "question": "If 4 men do work in 9 days, how long 6 men?",
        "options": [
            {
                "letter": "A",
                "text": "5"
            },
            {
                "letter": "B",
                "text": "6"
            },
            {
                "letter": "C",
                "text": "7"
            },
            {
                "letter": "D",
                "text": "8"
            }
        ],
        "answer_letter": "B",
        "answer_text": "6 days",
        "solution": "Work = 4 \u00d7 9\n= 36 man-days\n36 \u00f7 6\n= 6 days"
    },
    {
        "id": 40,
        "topic": "Logical Numerical",
        "question": "Simple interest on 8,000 at 5% for 4 yrs?",
        "options": [
            {
                "letter": "A",
                "text": "1,400"
            },
            {
                "letter": "B",
                "text": "1,500"
            },
            {
                "letter": "C",
                "text": "1,600"
            },
            {
                "letter": "D",
                "text": "1,700\n\nPART IX \u2013 Logical Numerical"
            }
        ],
        "answer_letter": "C",
        "answer_text": "1600",
        "solution": "Simple Interest:\nI = PRT\n= 8000 \u00d7 0.05 \u00d7 4\n= 1600"
    },
    {
        "id": 41,
        "topic": "Logical Numerical",
        "question": "9, 27, 81, ?",
        "options": [
            {
                "letter": "A",
                "text": "162"
            },
            {
                "letter": "B",
                "text": "243"
            },
            {
                "letter": "C",
                "text": "324"
            },
            {
                "letter": "D",
                "text": "405"
            }
        ],
        "answer_letter": "B",
        "answer_text": "243",
        "solution": "Multiply by 3\n9 \u2192 27 \u2192 81\n81 \u00d7 3\n= 243"
    },
    {
        "id": 42,
        "topic": "Logical Numerical",
        "question": "4, 11, 25, 53, ?",
        "options": [
            {
                "letter": "A",
                "text": "95"
            },
            {
                "letter": "B",
                "text": "101"
            },
            {
                "letter": "C",
                "text": "109"
            },
            {
                "letter": "D",
                "text": "117"
            }
        ],
        "answer_letter": "C",
        "answer_text": "109",
        "solution": "Differences:\n7, 14, 28, 56\nNext = 112\n53 + 56 = 109"
    },
    {
        "id": 43,
        "topic": "Logical Numerical",
        "question": "1, 1, 2, 3, 5, ?",
        "options": [
            {
                "letter": "A",
                "text": "6"
            },
            {
                "letter": "B",
                "text": "7"
            },
            {
                "letter": "C",
                "text": "8"
            },
            {
                "letter": "D",
                "text": "9"
            }
        ],
        "answer_letter": "C",
        "answer_text": "8",
        "solution": "Fibonacci sequence:\n1, 1, 2, 3, 5\nNext = 3 + 5\n= 8"
    },
    {
        "id": 44,
        "topic": "Logical Numerical",
        "question": "If 3x = 12y and y = 5, find x",
        "options": [
            {
                "letter": "A",
                "text": "15"
            },
            {
                "letter": "B",
                "text": "18"
            },
            {
                "letter": "C",
                "text": "20"
            },
            {
                "letter": "D",
                "text": "25"
            }
        ],
        "answer_letter": "C",
        "answer_text": "20",
        "solution": "3x = 12y\ny = 5\n3x = 60\nx = 20"
    },
    {
        "id": 45,
        "topic": "Ultimate Level",
        "question": "60% of number is 90. Number?",
        "options": [
            {
                "letter": "A",
                "text": "120"
            },
            {
                "letter": "B",
                "text": "135"
            },
            {
                "letter": "C",
                "text": "150"
            },
            {
                "letter": "D",
                "text": "180\n\nPART X \u2013 Ultimate Level"
            }
        ],
        "answer_letter": "C",
        "answer_text": "150",
        "solution": "60% of x = 90\n0.60x = 90\nx = 90 \u00f7 0.60\n= 150"
    },
    {
        "id": 46,
        "topic": "Ultimate Level",
        "question": "If x\u00b2 + 5x + 6 = 0, find x",
        "options": [
            {
                "letter": "A",
                "text": "-2, -3"
            },
            {
                "letter": "B",
                "text": "2, 3"
            },
            {
                "letter": "C",
                "text": "-1, -6"
            },
            {
                "letter": "D",
                "text": "1, 6"
            }
        ],
        "answer_letter": "A",
        "answer_text": "-2, -3",
        "solution": "x\u00b2 + 5x + 6 = 0\nFactor:\n(x + 2)(x + 3) = 0\nx = -2 or -3"
    },
    {
        "id": 47,
        "topic": "Ultimate Level",
        "question": "Selling price 3,600 with 25% profit. Cost price?",
        "options": [
            {
                "letter": "A",
                "text": "2,700"
            },
            {
                "letter": "B",
                "text": "2,800"
            },
            {
                "letter": "C",
                "text": "2,880"
            },
            {
                "letter": "D",
                "text": "3,000"
            }
        ],
        "answer_letter": "C",
        "answer_text": "2880",
        "solution": "25% profit\nSP = 1.25(CP)\n3600 = 1.25(CP)\nCP = 3600 \u00f7 1.25\n= 2880"
    },
    {
        "id": 48,
        "topic": "Ultimate Level",
        "question": "A train 200m long crosses 300m bridge in 25 sec. Speed?",
        "options": [
            {
                "letter": "A",
                "text": "16 m/s"
            },
            {
                "letter": "B",
                "text": "18 m/s"
            },
            {
                "letter": "C",
                "text": "20 m/s"
            },
            {
                "letter": "D",
                "text": "22 m/s"
            }
        ],
        "answer_letter": "C",
        "answer_text": "20 m/s",
        "solution": "Distance = train + bridge\n= 200 + 300\n= 500 m\nSpeed = 500 \u00f7 25\n= 20 m/s"
    },
    {
        "id": 49,
        "topic": "Ultimate Level",
        "question": "35% of number equals 140. Number?",
        "options": [
            {
                "letter": "A",
                "text": "300"
            },
            {
                "letter": "B",
                "text": "350"
            },
            {
                "letter": "C",
                "text": "400"
            },
            {
                "letter": "D",
                "text": "450"
            }
        ],
        "answer_letter": "C",
        "answer_text": "400",
        "solution": "35% of x = 140\n0.35x = 140\nx = 140 \u00f7 0.35\n= 400"
    },
    {
        "id": 50,
        "topic": "Ultimate Level",
        "question": "If x + 2 = 7, find x\u00b3",
        "options": [
            {
                "letter": "A",
                "text": "100"
            },
            {
                "letter": "B",
                "text": "110"
            },
            {
                "letter": "C",
                "text": "125"
            },
            {
                "letter": "D",
                "text": "150"
            }
        ],
        "answer_letter": "C",
        "answer_text": "125",
        "solution": "x + 2 = 7\nx = 5\nx\u00b3 = 5\u00b3\n= 125"
    }
];


const analyticalQuestions = [
    {
        "id": 1,
        "topic": "Identifying Assumptions",
        "question": "All employees who attend training regularly perform better.",
        "options": [
            {
                "letter": "A",
                "text": "Employees who do not attend training perform poorly"
            },
            {
                "letter": "B",
                "text": "Training improves performance"
            },
            {
                "letter": "C",
                "text": "Performance depends solely on training"
            },
            {
                "letter": "D",
                "text": "Only employees attending training are evaluated"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Training improves performance",
        "solution": "Correct. The statement implies training improves performance; the assumption is that training has an effect."
    },
    {
        "id": 2,
        "topic": "Identifying Assumptions",
        "question": "The government reduced fuel prices to ease inflation.",
        "options": [
            {
                "letter": "A",
                "text": "Fuel prices directly affect inflation"
            },
            {
                "letter": "B",
                "text": "Inflation only depends on fuel"
            },
            {
                "letter": "C",
                "text": "People prefer government intervention"
            },
            {
                "letter": "D",
                "text": "Fuel reduction will not impact economy"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Fuel prices directly affect inflation",
        "solution": "Correct. If fuel prices didn't affect inflation, the action wouldn't make sense."
    },
    {
        "id": 3,
        "topic": "Identifying Assumptions",
        "question": "Students are encouraged to read newspapers daily.",
        "options": [
            {
                "letter": "A",
                "text": "Reading newspapers improves knowledge"
            },
            {
                "letter": "B",
                "text": "Students do not read newspapers"
            },
            {
                "letter": "C",
                "text": "Newspapers are available for free"
            },
            {
                "letter": "D",
                "text": "Teachers monitor newspaper reading"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Reading newspapers improves knowledge",
        "solution": "Correct. Encouraging newspaper reading assumes it improves knowledge."
    },
    {
        "id": 4,
        "topic": "Identifying Assumptions",
        "question": "Company XYZ introduced flexible working hours to increase productivity.",
        "options": [
            {
                "letter": "A",
                "text": "Productivity depends on working hours"
            },
            {
                "letter": "B",
                "text": "Employees work better in flexible hours"
            },
            {
                "letter": "C",
                "text": "Productivity cannot increase with fixed hours"
            },
            {
                "letter": "D",
                "text": "Flexible hours reduce costs"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Employees work better in flexible hours",
        "solution": "Correct. Flexible hours are assumed to improve productivity."
    },
    {
        "id": 5,
        "topic": "Identifying Assumptions",
        "question": "The city banned smoking in public places to improve health.",
        "options": [
            {
                "letter": "A",
                "text": "Smoking affects public health"
            },
            {
                "letter": "B",
                "text": "People obey bans"
            },
            {
                "letter": "C",
                "text": "Health is more important than freedom"
            },
            {
                "letter": "D",
                "text": "Smoking will reduce immediately"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Smoking affects public health",
        "solution": "Correct. Banning smoking assumes smoking impacts public health."
    },
    {
        "id": 6,
        "topic": "Identifying Assumptions",
        "question": "The manager praised employees who submitted reports early.",
        "options": [
            {
                "letter": "A",
                "text": "Early submission is important"
            },
            {
                "letter": "B",
                "text": "Employees submit reports randomly"
            },
            {
                "letter": "C",
                "text": "Manager likes all employees"
            },
            {
                "letter": "D",
                "text": "Reports are useless"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Early submission is important",
        "solution": "Correct. Praising early submission assumes early submission is valued."
    },
    {
        "id": 7,
        "topic": "Identifying Assumptions",
        "question": "The school recommended students to sleep 8 hours daily.",
        "options": [
            {
                "letter": "A",
                "text": "Sleep affects student performance"
            },
            {
                "letter": "B",
                "text": "Students do not sleep"
            },
            {
                "letter": "C",
                "text": "Sleep is mandatory"
            },
            {
                "letter": "D",
                "text": "Only top students need sleep"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Sleep affects student performance",
        "solution": "Correct. Recommending 8 hours assumes sleep affects performance."
    },
    {
        "id": 8,
        "topic": "Identifying Assumptions",
        "question": "The company upgraded computers to improve efficiency.",
        "options": [
            {
                "letter": "A",
                "text": "Old computers were slow"
            },
            {
                "letter": "B",
                "text": "Employees need computers"
            },
            {
                "letter": "C",
                "text": "Efficiency only depends on computers"
            },
            {
                "letter": "D",
                "text": "Computers are expensive"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Old computers were slow",
        "solution": "Correct. Installing new computers assumes old ones were insufficient."
    },
    {
        "id": 9,
        "topic": "Identifying Assumptions",
        "question": "Parents were advised to limit children's screen time.",
        "options": [
            {
                "letter": "A",
                "text": "Screen time affects children's health"
            },
            {
                "letter": "B",
                "text": "Children do not obey"
            },
            {
                "letter": "C",
                "text": "All parents follow advice"
            },
            {
                "letter": "D",
                "text": "Screen time has no effect"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Screen time affects children's health",
        "solution": "Correct. Limiting screen time assumes screen time affects children's health."
    },
    {
        "id": 10,
        "topic": "Identifying Assumptions",
        "question": "The mayor urged citizens to plant trees to reduce pollution.",
        "options": [
            {
                "letter": "A",
                "text": "Trees absorb pollutants"
            },
            {
                "letter": "B",
                "text": "Pollution is harmful"
            },
            {
                "letter": "C",
                "text": "Citizens like planting trees"
            },
            {
                "letter": "D",
                "text": "Pollution will disappear immediately"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Trees absorb pollutants",
        "solution": "Correct. Planting trees assumes trees absorb pollutants."
    },
    {
        "id": 11,
        "topic": "Identifying Assumptions",
        "question": "The university introduced new courses to attract more students.",
        "options": [
            {
                "letter": "A",
                "text": "New courses are popular"
            },
            {
                "letter": "B",
                "text": "Students are interested in all courses"
            },
            {
                "letter": "C",
                "text": "Enrollment depends on courses"
            },
            {
                "letter": "D",
                "text": "Teachers prefer new courses"
            }
        ],
        "answer_letter": "A",
        "answer_text": "New courses are popular",
        "solution": "Correct. Introducing new courses assumes enrollment is influenced by courses."
    },
    {
        "id": 12,
        "topic": "Identifying Assumptions",
        "question": "The government imposed fines for littering.",
        "options": [
            {
                "letter": "A",
                "text": "People litter often"
            },
            {
                "letter": "B",
                "text": "People obey rules"
            },
            {
                "letter": "C",
                "text": "Fines are collected efficiently"
            },
            {
                "letter": "D",
                "text": "Pollution is a major issue"
            }
        ],
        "answer_letter": "A",
        "answer_text": "People litter often",
        "solution": "Correct. Imposing fines assumes littering is a problem."
    },
    {
        "id": 13,
        "topic": "Identifying Assumptions",
        "question": "The airline increased flights to popular destinations.",
        "options": [
            {
                "letter": "A",
                "text": "Many people travel"
            },
            {
                "letter": "B",
                "text": "Tickets are cheap"
            },
            {
                "letter": "C",
                "text": "Popular destinations are profitable"
            },
            {
                "letter": "D",
                "text": "Pilots are available"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Popular destinations are profitable",
        "solution": "Correct. Increasing flights to popular destinations assumes profitability."
    },
    {
        "id": 14,
        "topic": "Identifying Assumptions",
        "question": "The bank offered higher interest rates on savings accounts.",
        "options": [
            {
                "letter": "A",
                "text": "Customers save more"
            },
            {
                "letter": "B",
                "text": "Banks are trustworthy"
            },
            {
                "letter": "C",
                "text": "Interest is important for clients"
            },
            {
                "letter": "D",
                "text": "Banks only care about profits"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Interest is important for clients",
        "solution": "Correct. Higher interest rates assume clients respond to interest."
    },
    {
        "id": 15,
        "topic": "Identifying Assumptions",
        "question": "The store introduced a loyalty program to increase sales.",
        "options": [
            {
                "letter": "A",
                "text": "Customers return frequently"
            },
            {
                "letter": "B",
                "text": "Sales depend solely on loyalty"
            },
            {
                "letter": "C",
                "text": "Discounts are effective"
            },
            {
                "letter": "D",
                "text": "Customers are loyal"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Customers return frequently",
        "solution": "Correct. Loyalty programs encourage customers to come back and buy again."
    },
    {
        "id": 16,
        "topic": "Identifying Assumptions",
        "question": "The company reduced office space to cut costs.",
        "options": [
            {
                "letter": "A",
                "text": "Rent is expensive"
            },
            {
                "letter": "B",
                "text": "Employees work from home"
            },
            {
                "letter": "C",
                "text": "Cost reduction is important"
            },
            {
                "letter": "D",
                "text": "Offices are unnecessary"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Rent is expensive",
        "solution": "Correct. Reducing office space lowers rent and other costs."
    },
    {
        "id": 17,
        "topic": "Identifying Assumptions",
        "question": "The government provided subsidies for electric vehicles.",
        "options": [
            {
                "letter": "A",
                "text": "EVs reduce pollution"
            },
            {
                "letter": "B",
                "text": "People buy EVs without subsidy"
            },
            {
                "letter": "C",
                "text": "Subsidy alone increases adoption"
            },
            {
                "letter": "D",
                "text": "Fossil fuels are bad"
            }
        ],
        "answer_letter": "A",
        "answer_text": "EVs reduce pollution",
        "solution": "Correct. Subsidies help encourage people to buy EVs."
    },
    {
        "id": 18,
        "topic": "Identifying Assumptions",
        "question": "Parents were advised to monitor children's diet.",
        "options": [
            {
                "letter": "A",
                "text": "Diet affects health"
            },
            {
                "letter": "B",
                "text": "Children are picky"
            },
            {
                "letter": "C",
                "text": "Parents are responsible"
            },
            {
                "letter": "D",
                "text": "Healthy food is available"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Diet affects health",
        "solution": "Correct. Children's health depends on what they eat."
    },
    {
        "id": 19,
        "topic": "Identifying Assumptions",
        "question": "The school increased library hours.",
        "options": [
            {
                "letter": "A",
                "text": "Students need more study time"
            },
            {
                "letter": "B",
                "text": "Teachers prefer library"
            },
            {
                "letter": "C",
                "text": "Students study at home"
            },
            {
                "letter": "D",
                "text": "Library is underutilized"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Students need more study time",
        "solution": "Correct. Longer library hours give students more time to study."
    },
    {
        "id": 20,
        "topic": "Identifying Conclusions",
        "question": "The hospital installed new ventilators.",
        "options": [
            {
                "letter": "A",
                "text": "Ventilators improve patient care"
            },
            {
                "letter": "B",
                "text": "Old ventilators were insufficient"
            },
            {
                "letter": "C",
                "text": "Hospital is modern"
            },
            {
                "letter": "D",
                "text": "Staff is trained\n\nPART II \u2013 Identifying Conclusions (21\u201350)"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Ventilators improve patient care",
        "solution": "Correct. Hospitals install ventilators to better help and treat patients."
    },
    {
        "id": 21,
        "topic": "Identifying Conclusions",
        "question": "All roses are flowers. Some flowers fade quickly.",
        "options": [
            {
                "letter": "A",
                "text": "Some roses fade quickly"
            },
            {
                "letter": "B",
                "text": "All flowers are roses"
            },
            {
                "letter": "C",
                "text": "Some flowers are roses"
            },
            {
                "letter": "D",
                "text": "No roses fade quickly"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Some flowers are roses",
        "solution": "Correct. Logical conclusion: \u201cSome flowers are roses\u201d is valid."
    },
    {
        "id": 22,
        "topic": "Identifying Conclusions",
        "question": "If the government increases taxes on cigarettes, consumption will decrease.",
        "options": [
            {
                "letter": "A",
                "text": "Cigarette taxes affect consumption"
            },
            {
                "letter": "B",
                "text": "Cigarettes are unhealthy"
            },
            {
                "letter": "C",
                "text": "People will smoke less"
            },
            {
                "letter": "D",
                "text": "Taxes are harmful"
            }
        ],
        "answer_letter": "C",
        "answer_text": "People will smoke less",
        "solution": "Correct. If taxes increase \u2192 consumption decreases \u2192 conclusion: people smoke less."
    },
    {
        "id": 23,
        "topic": "Identifying Conclusions",
        "question": "Every employee must submit reports on time. John is an employee.",
        "options": [
            {
                "letter": "A",
                "text": "John may submit late"
            },
            {
                "letter": "B",
                "text": "John must submit on time"
            },
            {
                "letter": "C",
                "text": "John is lazy"
            },
            {
                "letter": "D",
                "text": "Some employees submit late"
            }
        ],
        "answer_letter": "B",
        "answer_text": "John must submit on time",
        "solution": "Correct. John must follow the rule; he must submit on time."
    },
    {
        "id": 24,
        "topic": "Identifying Conclusions",
        "question": "Regular exercise reduces the risk of heart disease.",
        "options": [
            {
                "letter": "A",
                "text": "Exercise prevents heart disease completely"
            },
            {
                "letter": "B",
                "text": "People should exercise regularly"
            },
            {
                "letter": "C",
                "text": "Only athletes are healthy"
            },
            {
                "letter": "D",
                "text": "Heart disease cannot be cured"
            }
        ],
        "answer_letter": "B",
        "answer_text": "People should exercise regularly",
        "solution": "Correct. Exercise reduces heart disease risk \u2192 people should exercise."
    },
    {
        "id": 25,
        "topic": "Identifying Conclusions",
        "question": "The school imposed a dress code to maintain discipline.",
        "options": [
            {
                "letter": "A",
                "text": "Discipline requires dress code"
            },
            {
                "letter": "B",
                "text": "Dress code improves focus"
            },
            {
                "letter": "C",
                "text": "Students obey rules"
            },
            {
                "letter": "D",
                "text": "Dress code alone ensures discipline"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Dress code alone ensures discipline",
        "solution": "Correct. Dress code intended to maintain discipline \u2192 ensures discipline."
    },
    {
        "id": 26,
        "topic": "Identifying Conclusions",
        "question": "Online learning platforms are gaining popularity among students.",
        "options": [
            {
                "letter": "A",
                "text": "Students prefer online learning"
            },
            {
                "letter": "B",
                "text": "Offline learning is useless"
            },
            {
                "letter": "C",
                "text": "Online platforms are free"
            },
            {
                "letter": "D",
                "text": "All students use technology"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Students prefer online learning",
        "solution": "Correct. Online platforms gaining popularity \u2192 conclusion: students prefer online learning."
    },
    {
        "id": 27,
        "topic": "Identifying Conclusions",
        "question": "The new traffic system will reduce congestion.",
        "options": [
            {
                "letter": "A",
                "text": "Congestion exists"
            },
            {
                "letter": "B",
                "text": "Drivers follow rules"
            },
            {
                "letter": "C",
                "text": "Traffic lights are functional"
            },
            {
                "letter": "D",
                "text": "Roads are wide"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Congestion exists",
        "solution": "Correct. Introducing traffic system assumes congestion exists."
    },
    {
        "id": 28,
        "topic": "Identifying Conclusions",
        "question": "The hospital installed a new MRI machine to improve diagnosis.",
        "options": [
            {
                "letter": "A",
                "text": "Old diagnosis was inadequate"
            },
            {
                "letter": "B",
                "text": "MRI improves accuracy"
            },
            {
                "letter": "C",
                "text": "Patients pay more"
            },
            {
                "letter": "D",
                "text": "Hospital staff is trained"
            }
        ],
        "answer_letter": "B",
        "answer_text": "MRI improves accuracy",
        "solution": "Correct. Installing MRI improves diagnosis \u2192 conclusion: MRI improves accuracy."
    },
    {
        "id": 29,
        "topic": "Identifying Conclusions",
        "question": "City council plans to plant more trees to reduce pollution.",
        "options": [
            {
                "letter": "A",
                "text": "Trees absorb pollutants"
            },
            {
                "letter": "B",
                "text": "Pollution is harmful"
            },
            {
                "letter": "C",
                "text": "Residents prefer green city"
            },
            {
                "letter": "D",
                "text": "Pollution will disappear"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Trees absorb pollutants",
        "solution": "Correct. Planting trees assumes trees absorb pollutants."
    },
    {
        "id": 30,
        "topic": "Identifying Conclusions",
        "question": "The library extended its hours to accommodate more students.",
        "options": [
            {
                "letter": "A",
                "text": "Students need more time"
            },
            {
                "letter": "B",
                "text": "Students work at night"
            },
            {
                "letter": "C",
                "text": "Staff is available"
            },
            {
                "letter": "D",
                "text": "Library was empty"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Students need more time",
        "solution": "Correct. Extended library hours \u2192 assumption: students need more time."
    },
    {
        "id": 31,
        "topic": "Identifying Conclusions",
        "question": "Drinking water keeps you healthy.",
        "options": [
            {
                "letter": "A",
                "text": "Water consumption affects health"
            },
            {
                "letter": "B",
                "text": "Juice is unhealthy"
            },
            {
                "letter": "C",
                "text": "Only healthy people drink water"
            },
            {
                "letter": "D",
                "text": "Everyone drinks water"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Water consumption affects health",
        "solution": "Correct. Drinking water keeps you healthy \u2192 assumption: water affects health."
    },
    {
        "id": 32,
        "topic": "Identifying Conclusions",
        "question": "The manager praised the employee for efficiency.",
        "options": [
            {
                "letter": "A",
                "text": "Employee works efficiently"
            },
            {
                "letter": "B",
                "text": "Manager is kind"
            },
            {
                "letter": "C",
                "text": "All employees are praised"
            },
            {
                "letter": "D",
                "text": "Efficiency leads to promotion"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Employee works efficiently",
        "solution": "Correct. Employee praised \u2192 conclusion: employee works efficiently."
    },
    {
        "id": 33,
        "topic": "Identifying Conclusions",
        "question": "The company implemented a 5-day training program to enhance skills.",
        "options": [
            {
                "letter": "A",
                "text": "Training develops skills"
            },
            {
                "letter": "B",
                "text": "Employees need motivation"
            },
            {
                "letter": "C",
                "text": "Employees refuse to work"
            },
            {
                "letter": "D",
                "text": "Training is mandatory"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Training develops skills",
        "solution": "Correct. Training program \u2192 assumption: training develops skills."
    },
    {
        "id": 34,
        "topic": "Identifying Conclusions",
        "question": "Government plans to subsidize solar panels.",
        "options": [
            {
                "letter": "A",
                "text": "Solar energy usage will increase"
            },
            {
                "letter": "B",
                "text": "People will install solar panels immediately"
            },
            {
                "letter": "C",
                "text": "Subsidy solves energy crisis"
            },
            {
                "letter": "D",
                "text": "Fossil fuels are bad"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Solar energy usage will increase",
        "solution": "Correct. Subsidy \u2192 conclusion: solar energy usage increases."
    },
    {
        "id": 35,
        "topic": "Identifying Conclusions",
        "question": "Students must complete assignments before deadlines.",
        "options": [
            {
                "letter": "A",
                "text": "Deadlines ensure timely submission"
            },
            {
                "letter": "B",
                "text": "Assignments are optional"
            },
            {
                "letter": "C",
                "text": "Students do not submit"
            },
            {
                "letter": "D",
                "text": "Teachers punish students"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Deadlines ensure timely submission",
        "solution": "Correct. Assignments must be completed \u2192 assumption: deadlines ensure timely submission."
    },
    {
        "id": 36,
        "topic": "Identifying Conclusions",
        "question": "Parents were urged to vaccinate their children.",
        "options": [
            {
                "letter": "A",
                "text": "Vaccines prevent disease"
            },
            {
                "letter": "B",
                "text": "Children refuse vaccines"
            },
            {
                "letter": "C",
                "text": "Doctors recommend vaccination"
            },
            {
                "letter": "D",
                "text": "Only some parents vaccinate"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Vaccines prevent disease",
        "solution": "Correct. Vaccinate children \u2192 assumption: vaccines prevent disease."
    },
    {
        "id": 37,
        "topic": "Identifying Conclusions",
        "question": "Company offered work-from-home options to reduce stress.",
        "options": [
            {
                "letter": "A",
                "text": "Stress affects performance"
            },
            {
                "letter": "B",
                "text": "Employees prefer home"
            },
            {
                "letter": "C",
                "text": "Offices are unnecessary"
            },
            {
                "letter": "D",
                "text": "All employees work remotely"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Stress affects performance",
        "solution": "Correct. WFH reduces stress \u2192 assumption: stress affects performance."
    },
    {
        "id": 38,
        "topic": "Identifying Conclusions",
        "question": "The city installed more streetlights for safety.",
        "options": [
            {
                "letter": "A",
                "text": "Safety depends on streetlights"
            },
            {
                "letter": "B",
                "text": "Crime is rising"
            },
            {
                "letter": "C",
                "text": "People prefer night travel"
            },
            {
                "letter": "D",
                "text": "Streetlights are expensive"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Safety depends on streetlights",
        "solution": "Correct. Streetlights for safety \u2192 assumption: safety depends on streetlights."
    },
    {
        "id": 39,
        "topic": "Identifying Conclusions",
        "question": "The school held seminars on mental health.",
        "options": [
            {
                "letter": "A",
                "text": "Students face mental health issues"
            },
            {
                "letter": "B",
                "text": "Seminars are mandatory"
            },
            {
                "letter": "C",
                "text": "Teachers benefit"
            },
            {
                "letter": "D",
                "text": "Mental health is irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Students face mental health issues",
        "solution": "Correct. Seminars on mental health \u2192 assumption: students face mental health issues."
    },
    {
        "id": 40,
        "topic": "Identifying Conclusions",
        "question": "The government increased police patrols to prevent theft.",
        "options": [
            {
                "letter": "A",
                "text": "Theft is occurring"
            },
            {
                "letter": "B",
                "text": "Police are efficient"
            },
            {
                "letter": "C",
                "text": "Citizens feel safe"
            },
            {
                "letter": "D",
                "text": "Patrolling is costly"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Theft is occurring",
        "solution": "Correct. More patrols \u2192 assumption: theft occurs."
    },
    {
        "id": 41,
        "topic": "Identifying Conclusions",
        "question": "The company rewarded top performers.",
        "options": [
            {
                "letter": "A",
                "text": "Performance leads to rewards"
            },
            {
                "letter": "B",
                "text": "Rewards motivate all"
            },
            {
                "letter": "C",
                "text": "Only top employees work"
            },
            {
                "letter": "D",
                "text": "Rewards are cash only"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Performance leads to rewards",
        "solution": "Correct. Reward top performers \u2192 conclusion: performance leads to rewards."
    },
    {
        "id": 42,
        "topic": "Identifying Conclusions",
        "question": "Parents were advised to encourage reading at home.",
        "options": [
            {
                "letter": "A",
                "text": "Reading improves knowledge"
            },
            {
                "letter": "B",
                "text": "Children cannot read"
            },
            {
                "letter": "C",
                "text": "Teachers cannot help"
            },
            {
                "letter": "D",
                "text": "Books are expensive"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Reading improves knowledge",
        "solution": "Correct. Encourage reading \u2192 assumption: reading improves knowledge."
    },
    {
        "id": 43,
        "topic": "Identifying Conclusions",
        "question": "The university increased scholarship funds.",
        "options": [
            {
                "letter": "A",
                "text": "Scholarships attract students"
            },
            {
                "letter": "B",
                "text": "All students are smart"
            },
            {
                "letter": "C",
                "text": "Scholarships are enough"
            },
            {
                "letter": "D",
                "text": "Students prefer funded programs"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Scholarships attract students",
        "solution": "Correct. Increase scholarship funds \u2192 conclusion: scholarships attract students."
    },
    {
        "id": 44,
        "topic": "Identifying Conclusions",
        "question": "The airline improved in-flight services.",
        "options": [
            {
                "letter": "A",
                "text": "Better services attract passengers"
            },
            {
                "letter": "B",
                "text": "Flights were previously unsafe"
            },
            {
                "letter": "C",
                "text": "Passengers complain"
            },
            {
                "letter": "D",
                "text": "Meals are free"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Better services attract passengers",
        "solution": "Correct. Improved in-flight services \u2192 conclusion: attracts passengers."
    },
    {
        "id": 45,
        "topic": "Identifying Conclusions",
        "question": "Government launched campaign for clean energy.",
        "options": [
            {
                "letter": "A",
                "text": "Clean energy reduces pollution"
            },
            {
                "letter": "B",
                "text": "Fossil fuels are harmful"
            },
            {
                "letter": "C",
                "text": "People will adopt quickly"
            },
            {
                "letter": "D",
                "text": "Campaign is mandatory"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Clean energy reduces pollution",
        "solution": "Correct. Clean energy campaign \u2192 assumption: clean energy reduces pollution."
    },
    {
        "id": 46,
        "topic": "Identifying Conclusions",
        "question": "Students must participate in co-curricular activities.",
        "options": [
            {
                "letter": "A",
                "text": "Participation develops skills"
            },
            {
                "letter": "B",
                "text": "Activities are fun"
            },
            {
                "letter": "C",
                "text": "Only some students participate"
            },
            {
                "letter": "D",
                "text": "Teachers supervise"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Participation develops skills",
        "solution": "Correct. Participation in activities \u2192 assumption: develops skills."
    },
    {
        "id": 47,
        "topic": "Identifying Conclusions",
        "question": "The hospital organized awareness campaigns for hygiene.",
        "options": [
            {
                "letter": "A",
                "text": "Hygiene reduces disease"
            },
            {
                "letter": "B",
                "text": "People ignore campaigns"
            },
            {
                "letter": "C",
                "text": "Staff is trained"
            },
            {
                "letter": "D",
                "text": "Campaign is voluntary"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Hygiene reduces disease",
        "solution": "Correct. Hygiene campaigns \u2192 assumption: hygiene reduces disease."
    },
    {
        "id": 48,
        "topic": "Identifying Conclusions",
        "question": "The school banned junk food in cafeteria.",
        "options": [
            {
                "letter": "A",
                "text": "Junk food is unhealthy"
            },
            {
                "letter": "B",
                "text": "Students like junk food"
            },
            {
                "letter": "C",
                "text": "Food is expensive"
            },
            {
                "letter": "D",
                "text": "Cafeteria is crowded"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Junk food is unhealthy",
        "solution": "Correct. Ban junk food \u2192 assumption: junk food is unhealthy."
    },
    {
        "id": 49,
        "topic": "Identifying Conclusions",
        "question": "The government increased funding for research.",
        "options": [
            {
                "letter": "A",
                "text": "Research improves innovation"
            },
            {
                "letter": "B",
                "text": "Scientists need money"
            },
            {
                "letter": "C",
                "text": "All projects succeed"
            },
            {
                "letter": "D",
                "text": "Research is expensive"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Research improves innovation",
        "solution": "Correct. Research funding \u2192 assumption: research improves innovation."
    },
    {
        "id": 50,
        "topic": "Identifying Conclusions",
        "question": "Parents were warned about online safety.",
        "options": [
            {
                "letter": "A",
                "text": "Internet is risky"
            },
            {
                "letter": "B",
                "text": "Children are naive"
            },
            {
                "letter": "C",
                "text": "Parents are negligent"
            },
            {
                "letter": "D",
                "text": "Internet should be banned"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Internet is risky",
        "solution": "Correct. Parents warned \u2192 assumption: internet is risky."
    }
];


const logicalQuestions = [
    {
        "id": 1,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cAll civil servants must undergo ethics training. Juan is a civil servant.\u201d\nConclusion: Juan must have undergone ethics training.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Cannot be determined",
        "solution": "Juan may or may not have undergone ethics training; statement only says all civil servants must, not that all have done it."
    },
    {
        "id": 2,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cEvery department requires submission of monthly reports.\u201d\nConclusion: Department A, being a department, submits monthly reports.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "True",
        "solution": "Every department submits reports \u2192 Department A is a department \u2192 it submits reports."
    },
    {
        "id": 3,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cOnly employees with at least 5 years\u2019 experience can apply for promotion.\u201d\nConclusion: Maria has less than 5 years\u2019 experience, so she cannot be promoted.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Cannot be determined",
        "solution": "Maria has less than 5 years \u2192 she cannot apply. True, but question says \u201cpromotion,\u201d which is not exactly \u201capply.\u201d Ambiguous."
    },
    {
        "id": 4,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cIf it rains, the flag-raising ceremony will be canceled.\u201d\nConclusion: The ceremony was not canceled, so it did not rain.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "True",
        "solution": "If rain \u2192 ceremony canceled. Ceremony not canceled \u2192 it did not rain."
    },
    {
        "id": 5,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cAll eligible voters above 18 can vote.\u201d\nConclusion: Some people who cannot vote are below 18.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Cannot be determined",
        "solution": "Statement says voters above 18 can vote. Does not guarantee all under 18 cannot vote, although likely true."
    },
    {
        "id": 6,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cNo public office employee is exempt from the integrity test.\u201d\nConclusion: Some private employees are exempt.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Cannot be determined",
        "solution": "Statement says \u201cno public employee is exempt,\u201d but says nothing about private employees."
    },
    {
        "id": 7,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cEvery office has a complaint desk.\u201d\nConclusion: All complaint desks belong to offices.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Cannot be determined",
        "solution": "All offices have desks, but not all desks necessarily belong only to offices."
    },
    {
        "id": 8,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cOnly the heads of departments approve budgets.\u201d\nConclusion: If someone approves a budget, they must be a head of a department.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "True",
        "solution": "Only heads approve \u2192 anyone approving must be a head."
    },
    {
        "id": 9,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cAll public servants are required to attend the seminar.\u201d\nConclusion: Some attendees of the seminar are not public servants.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Cannot be determined",
        "solution": "Statement: all public servants attend. Conclusion about non-public servants attending is unknown."
    },
    {
        "id": 10,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cIf a report is late, disciplinary action will follow.\u201d\nConclusion: No disciplinary action happened, so no report was late.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant    11\u201320: Logical Sequences & Series"
            }
        ],
        "answer_letter": "A",
        "answer_text": "True",
        "solution": "Late \u2192 action. No action \u2192 report was not late.\n\n11\u201320: Logical Sequences & Series"
    },
    {
        "id": 11,
        "topic": "Logical Reasoning",
        "question": "Find the next number: 2, 6, 12, 20, 30, ?",
        "options": [
            {
                "letter": "A",
                "text": "40"
            },
            {
                "letter": "B",
                "text": "42"
            },
            {
                "letter": "C",
                "text": "45"
            },
            {
                "letter": "D",
                "text": "50"
            }
        ],
        "answer_letter": "B",
        "answer_text": "42",
        "solution": "Pattern: add consecutive even numbers:\n2+4=6, 6+6=12, 12+8=20, 20+10=30, 30+12=42."
    },
    {
        "id": 12,
        "topic": "Logical Reasoning",
        "question": "Find the missing letter: A, C, F, J, O, ?",
        "options": [
            {
                "letter": "A",
                "text": "U"
            },
            {
                "letter": "B",
                "text": "T"
            },
            {
                "letter": "C",
                "text": "P"
            },
            {
                "letter": "D",
                "text": "V"
            }
        ],
        "answer_letter": "A",
        "answer_text": "U",
        "solution": "A \u2192 C (+2) \u2192 F (+3) \u2192 J (+4) \u2192 O (+5) \u2192 U (+6)"
    },
    {
        "id": 13,
        "topic": "Logical Reasoning",
        "question": "Number series: 1, 4, 9, 16, 25, ?",
        "options": [
            {
                "letter": "A",
                "text": "30"
            },
            {
                "letter": "B",
                "text": "36"
            },
            {
                "letter": "C",
                "text": "35"
            },
            {
                "letter": "D",
                "text": "40"
            }
        ],
        "answer_letter": "B",
        "answer_text": "36",
        "solution": "Perfect squares:\n1\u00b2, 2\u00b2, 3\u00b2, 4\u00b2, 5\u00b2, 6\u00b2 = 36."
    },
    {
        "id": 14,
        "topic": "Logical Reasoning",
        "question": "3, 5, 9, 17, 33, ?",
        "options": [
            {
                "letter": "A",
                "text": "49"
            },
            {
                "letter": "B",
                "text": "65"
            },
            {
                "letter": "C",
                "text": "67"
            },
            {
                "letter": "D",
                "text": "70"
            }
        ],
        "answer_letter": "B",
        "answer_text": "65",
        "solution": "Pattern: multiply by 2 minus 1:\n3\u21925(+2), 5\u21929(+4), 9\u219217(+8), 17\u219233(+16), next +32 = 65."
    },
    {
        "id": 15,
        "topic": "Logical Reasoning",
        "question": "2, 6, 18, 54, ?",
        "options": [
            {
                "letter": "A",
                "text": "108"
            },
            {
                "letter": "B",
                "text": "162"
            },
            {
                "letter": "C",
                "text": "216"
            },
            {
                "letter": "D",
                "text": "324"
            }
        ],
        "answer_letter": "B",
        "answer_text": "162",
        "solution": "Multiply by 3 each step:\n2\u00d73=6, 6\u00d73=18, 18\u00d73=54, 54\u00d73=162."
    },
    {
        "id": 16,
        "topic": "Logical Reasoning",
        "question": "Find the next in series: 7, 14, 28, 56, ?",
        "options": [
            {
                "letter": "A",
                "text": "70"
            },
            {
                "letter": "B",
                "text": "112"
            },
            {
                "letter": "C",
                "text": "84"
            },
            {
                "letter": "D",
                "text": "96"
            }
        ],
        "answer_letter": "B",
        "answer_text": "112",
        "solution": "Multiply by 2:\n7\u00d72=14, 14\u00d72=28, 28\u00d72=56, 56\u00d72=112."
    },
    {
        "id": 17,
        "topic": "Logical Reasoning",
        "question": "Series: 1, 2, 6, 24, 120, ?",
        "options": [
            {
                "letter": "A",
                "text": "600"
            },
            {
                "letter": "B",
                "text": "720"
            },
            {
                "letter": "C",
                "text": "7200"
            },
            {
                "letter": "D",
                "text": "6000"
            }
        ],
        "answer_letter": "B",
        "answer_text": "720",
        "solution": "Factorial series:\n1!, 2!, 3!, 4!, 5!, 6! = 720."
    },
    {
        "id": 18,
        "topic": "Logical Reasoning",
        "question": "Series: Z, X, U, Q, L, ?",
        "options": [
            {
                "letter": "A",
                "text": "F"
            },
            {
                "letter": "B",
                "text": "G"
            },
            {
                "letter": "C",
                "text": "H"
            },
            {
                "letter": "D",
                "text": "E"
            }
        ],
        "answer_letter": "A",
        "answer_text": "F",
        "solution": "Reverse alphabet pattern:\nZ\u2192X(-2), X\u2192U(-3), U\u2192Q(-4), Q\u2192L(-5), L\u2192F(-6)."
    },
    {
        "id": 19,
        "topic": "Logical Reasoning",
        "question": "Series: 5, 10, 20, 40, 80, ?",
        "options": [
            {
                "letter": "A",
                "text": "160"
            },
            {
                "letter": "B",
                "text": "150"
            },
            {
                "letter": "C",
                "text": "180"
            },
            {
                "letter": "D",
                "text": "200"
            }
        ],
        "answer_letter": "A",
        "answer_text": "160",
        "solution": "Multiply by 2 each step:\n5\u219210\u219220\u219240\u219280\u2192160."
    },
    {
        "id": 20,
        "topic": "Logical Reasoning",
        "question": "Series: 2, 3, 5, 9, 17, 33, ?",
        "options": [
            {
                "letter": "A",
                "text": "49"
            },
            {
                "letter": "B",
                "text": "65"
            },
            {
                "letter": "C",
                "text": "63"
            },
            {
                "letter": "D",
                "text": "67    21\u201330: Analogies"
            }
        ],
        "answer_letter": "B",
        "answer_text": "65",
        "solution": "Pattern:\n2, 3(+1), 5(+2), 9(+4), 17(+8), 33(+16), next 33+32=65.\n\n21\u201330: Analogies"
    },
    {
        "id": 21,
        "topic": "Logical Reasoning",
        "question": "Book : Reading :: Fork : ?",
        "options": [
            {
                "letter": "A",
                "text": "Drawing"
            },
            {
                "letter": "B",
                "text": "Eating"
            },
            {
                "letter": "C",
                "text": "Cooking"
            },
            {
                "letter": "D",
                "text": "Writing"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Eating",
        "solution": "Fork is used to eat like book is used to read."
    },
    {
        "id": 22,
        "topic": "Logical Reasoning",
        "question": "Teacher : School :: Doctor : ?",
        "options": [
            {
                "letter": "A",
                "text": "Hospital"
            },
            {
                "letter": "B",
                "text": "Medicine"
            },
            {
                "letter": "C",
                "text": "Clinic"
            },
            {
                "letter": "D",
                "text": "Health"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Hospital",
        "solution": "Doctor works in a hospital like teacher in school."
    },
    {
        "id": 23,
        "topic": "Logical Reasoning",
        "question": "Pen : Write :: Knife : ?",
        "options": [
            {
                "letter": "A",
                "text": "Cut"
            },
            {
                "letter": "B",
                "text": "Eat"
            },
            {
                "letter": "C",
                "text": "Carve"
            },
            {
                "letter": "D",
                "text": "Sharp"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Cut",
        "solution": "Knife is used to cut like pen is used to write."
    },
    {
        "id": 24,
        "topic": "Logical Reasoning",
        "question": "Eye : See :: Ear : ?",
        "options": [
            {
                "letter": "A",
                "text": "Listen"
            },
            {
                "letter": "B",
                "text": "Talk"
            },
            {
                "letter": "C",
                "text": "Hear"
            },
            {
                "letter": "D",
                "text": "Smell"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Hear",
        "solution": "Ear is for hearing, eye is for seeing."
    },
    {
        "id": 25,
        "topic": "Logical Reasoning",
        "question": "Sun : Day :: Moon : ?",
        "options": [
            {
                "letter": "A",
                "text": "Light"
            },
            {
                "letter": "B",
                "text": "Night"
            },
            {
                "letter": "C",
                "text": "Star"
            },
            {
                "letter": "D",
                "text": "Shine"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Night",
        "solution": "Sun rules day, moon rules night."
    },
    {
        "id": 26,
        "topic": "Logical Reasoning",
        "question": "Fish : Water :: Bird : ?",
        "options": [
            {
                "letter": "A",
                "text": "Nest"
            },
            {
                "letter": "B",
                "text": "Tree"
            },
            {
                "letter": "C",
                "text": "Air"
            },
            {
                "letter": "D",
                "text": "Cage"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Air",
        "solution": "Fish \u2192 water, Bird \u2192 air."
    },
    {
        "id": 27,
        "topic": "Logical Reasoning",
        "question": "Finger : Hand :: Toe : ?",
        "options": [
            {
                "letter": "A",
                "text": "Foot"
            },
            {
                "letter": "B",
                "text": "Leg"
            },
            {
                "letter": "C",
                "text": "Nail"
            },
            {
                "letter": "D",
                "text": "Bone"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Foot",
        "solution": "Toe belongs to foot like finger belongs to hand."
    },
    {
        "id": 28,
        "topic": "Logical Reasoning",
        "question": "Seed : Plant :: Egg : ?",
        "options": [
            {
                "letter": "A",
                "text": "Chicken"
            },
            {
                "letter": "B",
                "text": "Bird"
            },
            {
                "letter": "C",
                "text": "Hatch"
            },
            {
                "letter": "D",
                "text": "Animal"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Chicken",
        "solution": "Egg hatches into chicken like seed grows into plant."
    },
    {
        "id": 29,
        "topic": "Logical Reasoning",
        "question": "Fire : Hot :: Ice : ?",
        "options": [
            {
                "letter": "A",
                "text": "Wet"
            },
            {
                "letter": "B",
                "text": "Cold"
            },
            {
                "letter": "C",
                "text": "Dry"
            },
            {
                "letter": "D",
                "text": "Hard"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Cold",
        "solution": "Fire \u2192 hot, Ice \u2192 cold."
    },
    {
        "id": 30,
        "topic": "Logical Reasoning",
        "question": "Sword : Warrior :: Pen : ?",
        "options": [
            {
                "letter": "A",
                "text": "Author"
            },
            {
                "letter": "B",
                "text": "Writer"
            },
            {
                "letter": "C",
                "text": "Student"
            },
            {
                "letter": "D",
                "text": "Editor    31\u201340: Data & Pattern Interpretation"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Writer",
        "solution": "Sword \u2192 warrior, Pen \u2192 writer.\n\n31\u201340: Data & Pattern Interpretation"
    },
    {
        "id": 31,
        "topic": "Logical Reasoning",
        "question": "If all A are B, some B are C. Which is true?",
        "options": [
            {
                "letter": "A",
                "text": "All A are C"
            },
            {
                "letter": "B",
                "text": "Some B are not A"
            },
            {
                "letter": "C",
                "text": "Some C are A"
            },
            {
                "letter": "D",
                "text": "Cannot be determined"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Cannot be determined",
        "solution": "Cannot confirm direct relation between A & C."
    },
    {
        "id": 32,
        "topic": "Logical Reasoning",
        "question": "All cats are animals. Some animals are not dogs. Can we say some cats are not dogs?",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "True",
        "solution": "Cats are animals, some animals are not dogs \u2192 cats not dogs. True."
    },
    {
        "id": 33,
        "topic": "Logical Reasoning",
        "question": "If 5 workers build 5 tables in 5 days, how long will 10 workers take to build 10 tables?",
        "options": [
            {
                "letter": "A",
                "text": "5 days"
            },
            {
                "letter": "B",
                "text": "10 days"
            },
            {
                "letter": "C",
                "text": "2.5 days"
            },
            {
                "letter": "D",
                "text": "7 days"
            }
        ],
        "answer_letter": "A",
        "answer_text": "5 days",
        "solution": "Work rate constant:\n5 workers \u2192 5 tables \u2192 5 days.\n10 workers \u2192 10 tables \u2192 same rate \u2192 5 days."
    },
    {
        "id": 34,
        "topic": "Logical Reasoning",
        "question": "A cube has 6 faces. How many edges does it have?",
        "options": [
            {
                "letter": "A",
                "text": "8"
            },
            {
                "letter": "B",
                "text": "12"
            },
            {
                "letter": "C",
                "text": "10"
            },
            {
                "letter": "D",
                "text": "16"
            }
        ],
        "answer_letter": "B",
        "answer_text": "12",
        "solution": "Cube has 12 edges."
    },
    {
        "id": 35,
        "topic": "Logical Reasoning",
        "question": "A train travels 60 km in 1 hour. How far will it go in 2.5 hours?",
        "options": [
            {
                "letter": "A",
                "text": "120 km"
            },
            {
                "letter": "B",
                "text": "150 km"
            },
            {
                "letter": "C",
                "text": "140 km"
            },
            {
                "letter": "D",
                "text": "130 km"
            }
        ],
        "answer_letter": "B",
        "answer_text": "150 km",
        "solution": "60 \u00d7 2.5 = 150 km."
    },
    {
        "id": 36,
        "topic": "Logical Reasoning",
        "question": "A clock shows 3:15. What is the angle between the hour and minute hands?",
        "options": [
            {
                "letter": "A",
                "text": "0\u00b0"
            },
            {
                "letter": "B",
                "text": "7.5\u00b0"
            },
            {
                "letter": "C",
                "text": "52.5\u00b0"
            },
            {
                "letter": "D",
                "text": "90\u00b0"
            }
        ],
        "answer_letter": "C",
        "answer_text": "52.5\u00b0",
        "solution": "Hour hand:\n3\u00d730 + 15\u00d70.5 = 97.5\u00b0\nMinute hand:\n90\u00b0\nDifference:\n97.5 \u2212 45 = 52.5\u00b0"
    },
    {
        "id": 37,
        "topic": "Logical Reasoning",
        "question": "Which number does not belong: 16, 27, 64, 125, 81?",
        "options": [
            {
                "letter": "A",
                "text": "16"
            },
            {
                "letter": "B",
                "text": "27"
            },
            {
                "letter": "C",
                "text": "64"
            },
            {
                "letter": "D",
                "text": "81"
            }
        ],
        "answer_letter": "D",
        "answer_text": "81",
        "solution": "All others are perfect cubes except 81:\n3\u00b3=27, 4\u00b3=64, 5\u00b3=125."
    },
    {
        "id": 38,
        "topic": "Logical Reasoning",
        "question": "If all roses are flowers, and some flowers fade quickly, which is true?",
        "options": [
            {
                "letter": "A",
                "text": "Some roses fade quickly"
            },
            {
                "letter": "B",
                "text": "No roses fade quickly"
            },
            {
                "letter": "C",
                "text": "All flowers fade quickly"
            },
            {
                "letter": "D",
                "text": "Cannot be determined"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Cannot be determined",
        "solution": "Some flowers fade quickly; cannot conclude anything about roses."
    },
    {
        "id": 39,
        "topic": "Logical Reasoning",
        "question": "If 2 pencils cost 30 pesos, how much do 5 pencils cost?",
        "options": [
            {
                "letter": "A",
                "text": "70"
            },
            {
                "letter": "B",
                "text": "75"
            },
            {
                "letter": "C",
                "text": "60"
            },
            {
                "letter": "D",
                "text": "80"
            }
        ],
        "answer_letter": "B",
        "answer_text": "75",
        "solution": "2 pencils = 30\n1 pencil = 15\n5 pencils = 75"
    },
    {
        "id": 40,
        "topic": "Logical Reasoning",
        "question": "If A \u2192 B and B \u2192 C, what is true?",
        "options": [
            {
                "letter": "A",
                "text": "A \u2192 C"
            },
            {
                "letter": "B",
                "text": "C \u2192 A"
            },
            {
                "letter": "C",
                "text": "B \u2192 A"
            },
            {
                "letter": "D",
                "text": "Cannot say    41\u201350: Critical Thinking & Word Logic"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A \u2192 C",
        "solution": "If A\u2192B and B\u2192C, then A\u2192C (transitive property).\n\n41\u201350: Critical Thinking & Word Logic"
    },
    {
        "id": 41,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cNo public servant ignores rules. All citizens are public servants.\u201d\nWhich statement is true?",
        "options": [
            {
                "letter": "A",
                "text": "Some citizens ignore rules"
            },
            {
                "letter": "B",
                "text": "All citizens follow rules"
            },
            {
                "letter": "C",
                "text": "No citizen is a public servant"
            },
            {
                "letter": "D",
                "text": "Cannot be determined"
            }
        ],
        "answer_letter": "B",
        "answer_text": "All citizens follow rules",
        "solution": "All public servants ignore no rules \u2192 citizens are all public servants \u2192 follow rules."
    },
    {
        "id": 42,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cOnly those who attend training can handle complaints.\u201d\nConclusion: Juan handled complaints. Can we assume he attended training?",
        "options": [
            {
                "letter": "A",
                "text": "Yes"
            },
            {
                "letter": "B",
                "text": "No"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Cannot be determined",
        "solution": "Juan handled complaints, but rule only says \u201ccan handle if trained,\u201d does not guarantee he attended training."
    },
    {
        "id": 43,
        "topic": "Logical Reasoning",
        "question": "\u201cAll managers approve budgets. Some employees are managers.\u201d\nConclusion: Some employees approve budgets.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "True",
        "solution": "All managers approve budgets, some employees are managers \u2192 some employees approve budgets."
    },
    {
        "id": 44,
        "topic": "Logical Reasoning",
        "question": "\u201cIf it rains, the seminar is canceled.\u201d\n\u201cThe seminar was held.\u201d\nConclusion: It did not rain.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "B",
        "answer_text": "False",
        "solution": "If rain \u2192 seminar canceled.\nSeminar held \u2192 did not rain."
    },
    {
        "id": 45,
        "topic": "Logical Reasoning",
        "question": "\u201cAll participants submitted forms. Some participants are from Manila.\u201d\nConclusion: Some from Manila submitted forms.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "True",
        "solution": "Some participants from Manila, all participants submitted forms \u2192 some from Manila submitted."
    },
    {
        "id": 46,
        "topic": "Logical Reasoning",
        "question": "\u201cIf a file is misplaced, action is taken immediately.\u201d\n\u201cThe file was misplaced, but no action was taken.\u201d\nConclusion?",
        "options": [
            {
                "letter": "A",
                "text": "Statement false"
            },
            {
                "letter": "B",
                "text": "File was not misplaced"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Statement false",
        "solution": "Misplaced file \u2192 action must follow.\nAction not taken \u2192 statement violated."
    },
    {
        "id": 47,
        "topic": "Logical Reasoning",
        "question": "Which word does not belong: Apple, Banana, Carrot, Mango",
        "options": [
            {
                "letter": "A",
                "text": "Apple"
            },
            {
                "letter": "B",
                "text": "Banana"
            },
            {
                "letter": "C",
                "text": "Carrot"
            },
            {
                "letter": "D",
                "text": "Mango"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Carrot",
        "solution": "Only carrot is a vegetable; others are fruits."
    },
    {
        "id": 48,
        "topic": "Logical Reasoning",
        "question": "Find the analogy: Paper : Pencil :: Canvas : ?",
        "options": [
            {
                "letter": "A",
                "text": "Brush"
            },
            {
                "letter": "B",
                "text": "Paint"
            },
            {
                "letter": "C",
                "text": "Pen"
            },
            {
                "letter": "D",
                "text": "Marker"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Paint",
        "solution": "Paper \u2192 pencil, canvas \u2192 paint."
    },
    {
        "id": 49,
        "topic": "Logical Reasoning",
        "question": "If A + B = C, and C \u2212 B = ?",
        "options": [
            {
                "letter": "A",
                "text": "B"
            },
            {
                "letter": "B",
                "text": "A"
            },
            {
                "letter": "C",
                "text": "C"
            },
            {
                "letter": "D",
                "text": "Cannot be determined"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A",
        "solution": "C \u2212 B = A."
    },
    {
        "id": 50,
        "topic": "Logical Reasoning",
        "question": "Statement: \u201cAll exams require review.\u201d\nConclusion: Some reviews are not exams.",
        "options": [
            {
                "letter": "A",
                "text": "True"
            },
            {
                "letter": "B",
                "text": "False"
            },
            {
                "letter": "C",
                "text": "Cannot be determined"
            },
            {
                "letter": "D",
                "text": "Irrelevant"
            }
        ],
        "answer_letter": "B",
        "answer_text": "False",
        "solution": "Not all reviews are exams; conclusion cannot be assumed."
    }
];


const dataInterpQuestions = [
    {
        "id": 1,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nWhich company had the highest % increase from 2019 to 2023?",
        "options": [
            {
                "letter": "A",
                "text": "A"
            },
            {
                "letter": "B",
                "text": "B"
            },
            {
                "letter": "C",
                "text": "C"
            },
            {
                "letter": "D",
                "text": "D"
            },
            {
                "letter": "E",
                "text": "E"
            }
        ],
        "answer_letter": "B",
        "answer_text": "B",
        "solution": "Company B: % increase = (1400 \u2212 900)/900 \u00d7 100 = 55.56, highest among all."
    },
    {
        "id": 2,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nTotal cars produced by all companies in 2021?",
        "options": [
            {
                "letter": "A",
                "text": "6650"
            },
            {
                "letter": "B",
                "text": "6651"
            },
            {
                "letter": "C",
                "text": "6600"
            },
            {
                "letter": "D",
                "text": "6700"
            }
        ],
        "answer_letter": "A",
        "answer_text": "6650",
        "solution": "Total 2021:\n1500 + 1250 + 1600 + 1000 + 1300 = 6650 units."
    },
    {
        "id": 3,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nAverage production of Company B over 5 years?",
        "options": [
            {
                "letter": "A",
                "text": "1190"
            },
            {
                "letter": "B",
                "text": "1210"
            },
            {
                "letter": "C",
                "text": "1220"
            },
            {
                "letter": "D",
                "text": "1200"
            }
        ],
        "answer_letter": "A",
        "answer_text": "1190",
        "solution": "Avg B:\n(900 + 1100 + 1250 + 1300 + 1400)/5 = 5950/5 = 1190."
    },
    {
        "id": 4,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nCompany C's production decreased in which year?",
        "options": [
            {
                "letter": "A",
                "text": "2020"
            },
            {
                "letter": "B",
                "text": "2021"
            },
            {
                "letter": "C",
                "text": "2022"
            },
            {
                "letter": "D",
                "text": "2023"
            }
        ],
        "answer_letter": "A",
        "answer_text": "2020",
        "solution": "Company C decreased from 1500 to 1400 in 2020."
    },
    {
        "id": 5,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nRatio of total production of Company A to Company D in 2022?",
        "options": [
            {
                "letter": "A",
                "text": "16:11"
            },
            {
                "letter": "B",
                "text": "8:5"
            },
            {
                "letter": "C",
                "text": "32:22"
            },
            {
                "letter": "D",
                "text": "4:3"
            }
        ],
        "answer_letter": "A",
        "answer_text": "16:11",
        "solution": "2022:\nA = 1600, D = 1100, ratio = 1600:1100 = 16:11."
    },
    {
        "id": 6,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nCombined production of Companies D and E in 2020?",
        "options": [
            {
                "letter": "A",
                "text": "2150"
            },
            {
                "letter": "B",
                "text": "2100"
            },
            {
                "letter": "C",
                "text": "2200"
            },
            {
                "letter": "D",
                "text": "2250"
            }
        ],
        "answer_letter": "A",
        "answer_text": "2150",
        "solution": "2020:\nD = 950, E = 1200, total = 2150."
    },
    {
        "id": 7,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nWhich company had least total production over 5 years?",
        "options": [
            {
                "letter": "A",
                "text": "A"
            },
            {
                "letter": "B",
                "text": "B"
            },
            {
                "letter": "C",
                "text": "C"
            },
            {
                "letter": "D",
                "text": "D"
            },
            {
                "letter": "E",
                "text": "E"
            }
        ],
        "answer_letter": "D",
        "answer_text": "D",
        "solution": "Total production over 5 years:\nA = 7350\nB = 5950\nC = 8000\nD = 5050\nE = 6500\nD is the least."
    },
    {
        "id": 8,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\n% contribution of Company E in 2023?",
        "options": [
            {
                "letter": "A",
                "text": "18%"
            },
            {
                "letter": "B",
                "text": "20%"
            },
            {
                "letter": "C",
                "text": "21%"
            },
            {
                "letter": "D",
                "text": "22%"
            }
        ],
        "answer_letter": "B",
        "answer_text": "20%",
        "solution": "2023:\nE = 1500, total = 1700 + 1400 + 1800 + 1200 + 1500 = 7600.\n% = 1500/7600 \u00d7 100 \u2248 19.74% \u2248 20%."
    },
    {
        "id": 9,
        "topic": "Data Interpretation (Tables)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nDifference between max and min production for Company A?",
        "options": [
            {
                "letter": "A",
                "text": "500"
            },
            {
                "letter": "B",
                "text": "600"
            },
            {
                "letter": "C",
                "text": "550"
            },
            {
                "letter": "D",
                "text": "650"
            }
        ],
        "answer_letter": "A",
        "answer_text": "500",
        "solution": "Max 1700 \u2212 Min 1200 = 500."
    },
    {
        "id": 10,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Table 1: Car Production (Units) 2019\u20132023**\nCompany | 2019 | 2020 | 2021 | 2022 | 2023\n--- | --- | --- | --- | --- | ---\nA | 1200 | 1350 | 1500 | 1600 | 1700\nB | 900 | 1100 | 1250 | 1300 | 1400\nC | 1500 | 1400 | 1600 | 1700 | 1800\nD | 800 | 950 | 1000 | 1100 | 1200\nE | 1100 | 1200 | 1300 | 1400 | 1500\n\nAverage production of all companies in 2022?",
        "options": [
            {
                "letter": "A",
                "text": "1420"
            },
            {
                "letter": "B",
                "text": "1425"
            },
            {
                "letter": "C",
                "text": "1440"
            },
            {
                "letter": "D",
                "text": "1450\nPART II \u2013 BAR/LINE GRAPHS (11\u201320)\nNumber of students enrolled in 5 courses over 6 months\nMonth\tMath\tScience\tEnglish\tHistory\tArts\nJan\t80\t90\t85\t70\t60\nFeb\t85\t95\t90\t75\t65\nMar\t90\t100\t95\t80\t70\nApr\t100\t105\t100\t85\t80\nMay\t110\t110\t105\t90\t85\nJun\t115\t120\t110\t95\t90"
            }
        ],
        "answer_letter": "A",
        "answer_text": "1420",
        "solution": "2022 total = 1600 + 1300 + 1700 + 1100 + 1400 = 7100.\nAverage = 7100/5 = 1420.\n\nPART II \u2013 BAR/LINE GRAPHS (11\u201320)"
    },
    {
        "id": 11,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\n% increase of Science students from Jan to Jun?",
        "options": [
            {
                "letter": "A",
                "text": "33%"
            },
            {
                "letter": "B",
                "text": "30%"
            },
            {
                "letter": "C",
                "text": "25%"
            },
            {
                "letter": "D",
                "text": "28%"
            }
        ],
        "answer_letter": "A",
        "answer_text": "33%",
        "solution": "Science Jan = 90, Jun = 120.\n% increase = (120 \u2212 90)/90 \u00d7 100 \u2248 33.33%."
    },
    {
        "id": 12,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nAverage number of Arts students over 6 months?",
        "options": [
            {
                "letter": "A",
                "text": "72"
            },
            {
                "letter": "B",
                "text": "75"
            },
            {
                "letter": "C",
                "text": "73.5"
            },
            {
                "letter": "D",
                "text": "74"
            }
        ],
        "answer_letter": "B",
        "answer_text": "75",
        "solution": "Arts average:\n(60 + 65 + 70 + 80 + 85 + 90)/6 = 450/6 = 75."
    },
    {
        "id": 13,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nMonth with highest total enrollment?",
        "options": [
            {
                "letter": "A",
                "text": "Apr"
            },
            {
                "letter": "B",
                "text": "May"
            },
            {
                "letter": "C",
                "text": "Jun"
            },
            {
                "letter": "D",
                "text": "Mar"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Jun",
        "solution": "Monthly totals:\nJan = 385, Feb = 410, Mar = 435, Apr = 470, May = 500, Jun = 530.\nJun is highest."
    },
    {
        "id": 14,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nDifference between Math and English students in May?",
        "options": [
            {
                "letter": "A",
                "text": "5"
            },
            {
                "letter": "B",
                "text": "3"
            },
            {
                "letter": "C",
                "text": "2"
            },
            {
                "letter": "D",
                "text": "4"
            }
        ],
        "answer_letter": "A",
        "answer_text": "5",
        "solution": "May:\nMath = 110, English = 105.\nDifference = 5."
    },
    {
        "id": 15,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nRatio of History to Arts students in Feb?",
        "options": [
            {
                "letter": "A",
                "text": "75:65"
            },
            {
                "letter": "B",
                "text": "15:13"
            },
            {
                "letter": "C",
                "text": "75:60"
            },
            {
                "letter": "D",
                "text": "15:12"
            }
        ],
        "answer_letter": "B",
        "answer_text": "15:13",
        "solution": "Feb:\nHistory = 75, Arts = 65.\nRatio = 75:65 = 15:13."
    },
    {
        "id": 16,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nWhich course had maximum total students over 6 months?",
        "options": [
            {
                "letter": "A",
                "text": "Math"
            },
            {
                "letter": "B",
                "text": "Science"
            },
            {
                "letter": "C",
                "text": "English"
            },
            {
                "letter": "D",
                "text": "History"
            },
            {
                "letter": "E",
                "text": "Arts"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Science",
        "solution": "Total over 6 months:\nMath = 580, Science = 620, English = 585, History = 495, Arts = 450.\nScience is maximum."
    },
    {
        "id": 17,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nAverage Science students for first 3 months?",
        "options": [
            {
                "letter": "A",
                "text": "95"
            },
            {
                "letter": "B",
                "text": "95.0"
            },
            {
                "letter": "C",
                "text": "92"
            },
            {
                "letter": "D",
                "text": "93"
            }
        ],
        "answer_letter": "A",
        "answer_text": "95",
        "solution": "Avg Science first 3 months:\n(90 + 95 + 100)/3 = 285/3 = 95."
    },
    {
        "id": 18,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\n% contribution of English students in Apr to total students that month?",
        "options": [
            {
                "letter": "A",
                "text": "25%"
            },
            {
                "letter": "B",
                "text": "26%"
            },
            {
                "letter": "C",
                "text": "24%"
            },
            {
                "letter": "D",
                "text": "23%"
            }
        ],
        "answer_letter": "C",
        "answer_text": "24%",
        "solution": "Apr total = 100 + 105 + 100 + 85 + 80 = 470.\nEnglish = 100.\n% = 100/470 \u00d7 100 \u2248 21.28% \u2248 24%."
    },
    {
        "id": 19,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nIncrease of total students from Mar to Jun?",
        "options": [
            {
                "letter": "A",
                "text": "95"
            },
            {
                "letter": "B",
                "text": "115"
            },
            {
                "letter": "C",
                "text": "120"
            },
            {
                "letter": "D",
                "text": "125"
            }
        ],
        "answer_letter": "A",
        "answer_text": "95",
        "solution": "Total Mar = 435, Jun = 530.\nIncrement = 530 \u2212 435 = 95."
    },
    {
        "id": 20,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Number of students enrolled in 5 courses over 6 months**\nMonth | Math | Science | English | History | Arts\n--- | --- | --- | --- | --- | ---\nJan | 80 | 90 | 85 | 70 | 60\nFeb | 85 | 95 | 90 | 75 | 65\nMar | 90 | 100 | 95 | 80 | 70\nApr | 100 | 105 | 100 | 85 | 80\nMay | 110 | 110 | 105 | 90 | 85\nJun | 115 | 120 | 110 | 95 | 90\n\nMonth in which difference between Math and Science students was minimum?",
        "options": [
            {
                "letter": "A",
                "text": "Jan"
            },
            {
                "letter": "B",
                "text": "Feb"
            },
            {
                "letter": "C",
                "text": "Mar"
            },
            {
                "letter": "D",
                "text": "Jun\nPART III \u2013 PIE CHART / MIXED DATA (21\u201335)\nBudget Allocation (Million Php)\nDepartment\tBudget\nHR\t20\nMarketing\t50\nIT\t30\nOperations\t40\nR&D\t60"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Mar",
        "solution": "Difference Math vs Science:\nJan = 10, Feb = 10, Mar = 10, Apr = 5, May = 0, Jun = 5.\nMinimum difference is 0 in May.\n\nPART III \u2013 PIE CHART / MIXED DATA (21\u201335)"
    },
    {
        "id": 21,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\n% allocation of Marketing?",
        "options": [
            {
                "letter": "A",
                "text": "25%"
            },
            {
                "letter": "B",
                "text": "28%"
            },
            {
                "letter": "C",
                "text": "30%"
            },
            {
                "letter": "D",
                "text": "35%"
            }
        ],
        "answer_letter": "A",
        "answer_text": "25%",
        "solution": "Marketing = 50/200 = 25%."
    },
    {
        "id": 22,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nDifference in budget between R&D and HR?",
        "options": [
            {
                "letter": "A",
                "text": "40"
            },
            {
                "letter": "B",
                "text": "35"
            },
            {
                "letter": "C",
                "text": "30"
            },
            {
                "letter": "D",
                "text": "25"
            }
        ],
        "answer_letter": "A",
        "answer_text": "40",
        "solution": "R&D \u2212 HR = 60 \u2212 20 = 40."
    },
    {
        "id": 23,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nTotal budget?",
        "options": [
            {
                "letter": "A",
                "text": "200"
            },
            {
                "letter": "B",
                "text": "190"
            },
            {
                "letter": "C",
                "text": "180"
            },
            {
                "letter": "D",
                "text": "210"
            }
        ],
        "answer_letter": "A",
        "answer_text": "200",
        "solution": "Total = 20 + 50 + 30 + 40 + 60 = 200."
    },
    {
        "id": 24,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nRatio of IT to Operations?",
        "options": [
            {
                "letter": "A",
                "text": "3:4"
            },
            {
                "letter": "B",
                "text": "3:5"
            },
            {
                "letter": "C",
                "text": "2:3"
            },
            {
                "letter": "D",
                "text": "1:2"
            }
        ],
        "answer_letter": "A",
        "answer_text": "3:4",
        "solution": "IT:Operations = 30:40 = 3:4."
    },
    {
        "id": 25,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nIf Operations budget increases by 10%, new total?",
        "options": [
            {
                "letter": "A",
                "text": "204"
            },
            {
                "letter": "B",
                "text": "205"
            },
            {
                "letter": "C",
                "text": "206"
            },
            {
                "letter": "D",
                "text": "208"
            }
        ],
        "answer_letter": "A",
        "answer_text": "204",
        "solution": "Operations = 40, increased by 10% = 44.\nNew total = 200 + 4 = 204."
    },
    {
        "id": 26,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nDepartment with lowest allocation?",
        "options": [
            {
                "letter": "A",
                "text": "HR"
            },
            {
                "letter": "B",
                "text": "Marketing"
            },
            {
                "letter": "C",
                "text": "IT"
            },
            {
                "letter": "D",
                "text": "Operations"
            }
        ],
        "answer_letter": "A",
        "answer_text": "HR",
        "solution": "Lowest allocation is HR = 20."
    },
    {
        "id": 27,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nCombined % of HR and IT?",
        "options": [
            {
                "letter": "A",
                "text": "25%"
            },
            {
                "letter": "B",
                "text": "30%"
            },
            {
                "letter": "C",
                "text": "35%"
            },
            {
                "letter": "D",
                "text": "40%"
            }
        ],
        "answer_letter": "A",
        "answer_text": "25%",
        "solution": "HR + IT = 20 + 30 = 50.\n50/200 \u00d7 100 = 25%."
    },
    {
        "id": 28,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nMarketing budget as fraction of total?",
        "options": [
            {
                "letter": "A",
                "text": "1/4"
            },
            {
                "letter": "B",
                "text": "1/5"
            },
            {
                "letter": "C",
                "text": "1/3"
            },
            {
                "letter": "D",
                "text": "2/5"
            }
        ],
        "answer_letter": "A",
        "answer_text": "1/4",
        "solution": "Marketing/Total = 50/200 = 1/4."
    },
    {
        "id": 29,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nAverage budget of all departments?",
        "options": [
            {
                "letter": "A",
                "text": "40"
            },
            {
                "letter": "B",
                "text": "42"
            },
            {
                "letter": "C",
                "text": "38"
            },
            {
                "letter": "D",
                "text": "36"
            }
        ],
        "answer_letter": "A",
        "answer_text": "40",
        "solution": "Average = 200/5 = 40."
    },
    {
        "id": 30,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nIf total budget increases by 10%, HR gets 10% increase, new HR budget?",
        "options": [
            {
                "letter": "A",
                "text": "22"
            },
            {
                "letter": "B",
                "text": "21"
            },
            {
                "letter": "C",
                "text": "20"
            },
            {
                "letter": "D",
                "text": "23"
            }
        ],
        "answer_letter": "A",
        "answer_text": "22",
        "solution": "HR = 20, increased by 10% = 22."
    },
    {
        "id": 31,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nIT + R&D budget as % of total?",
        "options": [
            {
                "letter": "A",
                "text": "45%"
            },
            {
                "letter": "B",
                "text": "50%"
            },
            {
                "letter": "C",
                "text": "55%"
            },
            {
                "letter": "D",
                "text": "60%"
            }
        ],
        "answer_letter": "B",
        "answer_text": "50%",
        "solution": "IT + R&D = 30 + 60 = 90.\n90/200 \u00d7 100 = 45%."
    },
    {
        "id": 32,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nOperations budget after 20% cut?",
        "options": [
            {
                "letter": "A",
                "text": "32"
            },
            {
                "letter": "B",
                "text": "30"
            },
            {
                "letter": "C",
                "text": "28"
            },
            {
                "letter": "D",
                "text": "35"
            }
        ],
        "answer_letter": "A",
        "answer_text": "32",
        "solution": "Operations = 40, reduced by 20% = 32."
    },
    {
        "id": 33,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nCombined budget of Marketing and R&D?",
        "options": [
            {
                "letter": "A",
                "text": "100"
            },
            {
                "letter": "B",
                "text": "110"
            },
            {
                "letter": "C",
                "text": "90"
            },
            {
                "letter": "D",
                "text": "95"
            }
        ],
        "answer_letter": "B",
        "answer_text": "110",
        "solution": "Marketing + R&D = 50 + 60 = 110."
    },
    {
        "id": 34,
        "topic": "Data Interpretation (Bar/Line Graphs)",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nHR budget as % of total after 50% increase?",
        "options": [
            {
                "letter": "A",
                "text": "10%"
            },
            {
                "letter": "B",
                "text": "12%"
            },
            {
                "letter": "C",
                "text": "15%"
            },
            {
                "letter": "D",
                "text": "18%"
            }
        ],
        "answer_letter": "C",
        "answer_text": "15%",
        "solution": "HR = 20, increased by 50% = 30.\nNew total = 210.\n30/210 \u00d7 100 = 14.3%.\nClosest answer = 15%."
    },
    {
        "id": 35,
        "topic": "Mixed Word Problems",
        "question": "**Budget Allocation (Million Php)**\nDepartment | Budget\n--- | ---\nHR | 20\nMarketing | 50\nIT | 30\nOperations | 40\nR&D | 60\n\nDifference between IT and Marketing as % of total?",
        "options": [
            {
                "letter": "A",
                "text": "10%"
            },
            {
                "letter": "B",
                "text": "12%"
            },
            {
                "letter": "C",
                "text": "15%"
            },
            {
                "letter": "D",
                "text": "20%\nPART IV \u2013 MIXED WORD PROBLEMS (36\u201350)"
            }
        ],
        "answer_letter": "A",
        "answer_text": "10%",
        "solution": "IT = 30, Marketing = 50.\nDifference = 20.\n20/200 \u00d7 100 = 10%.\n\nPART IV \u2013 MIXED WORD PROBLEMS (36\u201350)"
    },
    {
        "id": 36,
        "topic": "Mixed Word Problems",
        "question": "5 workers can complete 120 units in 6 days. 6 workers complete?",
        "options": [
            {
                "letter": "A",
                "text": "140"
            },
            {
                "letter": "B",
                "text": "144"
            },
            {
                "letter": "C",
                "text": "150"
            },
            {
                "letter": "D",
                "text": "160"
            }
        ],
        "answer_letter": "B",
        "answer_text": "144",
        "solution": "5 workers produce 120 units in 6 days.\n20 units/day \u00f7 5 = 4 units/day per worker.\n6 workers produce 24 units/day.\n24 \u00d7 6 = 144."
    },
    {
        "id": 37,
        "topic": "Mixed Word Problems",
        "question": "Price of 15 items = 1800 Php. Price of 1 item?",
        "options": [
            {
                "letter": "A",
                "text": "120"
            },
            {
                "letter": "B",
                "text": "115"
            },
            {
                "letter": "C",
                "text": "125"
            },
            {
                "letter": "D",
                "text": "130"
            }
        ],
        "answer_letter": "A",
        "answer_text": "120",
        "solution": "1800 \u00f7 15 = 120 Php/item."
    },
    {
        "id": 38,
        "topic": "Mixed Word Problems",
        "question": "A train covers 300 km in 5 h. Speed?",
        "options": [
            {
                "letter": "A",
                "text": "50 km/h"
            },
            {
                "letter": "B",
                "text": "55 km/h"
            },
            {
                "letter": "C",
                "text": "60 km/h"
            },
            {
                "letter": "D",
                "text": "65 km/h"
            }
        ],
        "answer_letter": "C",
        "answer_text": "60 km/h",
        "solution": "300 km \u00f7 5 h = 60 km/h."
    },
    {
        "id": 39,
        "topic": "Mixed Word Problems",
        "question": "A shop sells 100 pens at 5% profit, total selling = ?",
        "options": [
            {
                "letter": "A",
                "text": "1050"
            },
            {
                "letter": "B",
                "text": "1055"
            },
            {
                "letter": "C",
                "text": "1060"
            },
            {
                "letter": "D",
                "text": "1070"
            }
        ],
        "answer_letter": "A",
        "answer_text": "1050",
        "solution": "Selling Price = 1000 \u00d7 1.05 = 1050."
    },
    {
        "id": 40,
        "topic": "Mixed Word Problems",
        "question": "Population increased from 2000 to 2500, % increase?",
        "options": [
            {
                "letter": "A",
                "text": "20%"
            },
            {
                "letter": "B",
                "text": "25%"
            },
            {
                "letter": "C",
                "text": "30%"
            },
            {
                "letter": "D",
                "text": "35%"
            }
        ],
        "answer_letter": "B",
        "answer_text": "25%",
        "solution": "(2500 \u2212 2000)/2000 \u00d7 100 = 25%."
    },
    {
        "id": 41,
        "topic": "Mixed Word Problems",
        "question": "Average marks of 10 students = 75. Total marks?",
        "options": [
            {
                "letter": "A",
                "text": "750"
            },
            {
                "letter": "B",
                "text": "760"
            },
            {
                "letter": "C",
                "text": "740"
            },
            {
                "letter": "D",
                "text": "770"
            }
        ],
        "answer_letter": "A",
        "answer_text": "750",
        "solution": "Total marks = 75 \u00d7 10 = 750."
    },
    {
        "id": 42,
        "topic": "Mixed Word Problems",
        "question": "Ratio of boys to girls = 3:2, total = 50, number of boys?",
        "options": [
            {
                "letter": "A",
                "text": "30"
            },
            {
                "letter": "B",
                "text": "28"
            },
            {
                "letter": "C",
                "text": "32"
            },
            {
                "letter": "D",
                "text": "25"
            }
        ],
        "answer_letter": "A",
        "answer_text": "30",
        "solution": "Boys = (3/5) \u00d7 50 = 30."
    },
    {
        "id": 43,
        "topic": "Mixed Word Problems",
        "question": "A box contains 20 red, 30 blue, 50 green balls. % red?",
        "options": [
            {
                "letter": "A",
                "text": "20%"
            },
            {
                "letter": "B",
                "text": "25%"
            },
            {
                "letter": "C",
                "text": "30%"
            },
            {
                "letter": "D",
                "text": "35%"
            }
        ],
        "answer_letter": "A",
        "answer_text": "20%",
        "solution": "Total balls = 20 + 30 + 50 = 100.\n20/100 \u00d7 100 = 20% red."
    },
    {
        "id": 44,
        "topic": "Mixed Word Problems",
        "question": "Total distance 240 km, ratio of first half : second half = 3:5. Distance of first half?",
        "options": [
            {
                "letter": "A",
                "text": "90 km"
            },
            {
                "letter": "B",
                "text": "100 km"
            },
            {
                "letter": "C",
                "text": "80 km"
            },
            {
                "letter": "D",
                "text": "120 km"
            }
        ],
        "answer_letter": "A",
        "answer_text": "90 km",
        "solution": "First half = (3/8) \u00d7 240 = 90 km."
    },
    {
        "id": 45,
        "topic": "Mixed Word Problems",
        "question": "3 pipes fill a tank in 6h, 8h, 12h respectively. Time to fill together?",
        "options": [
            {
                "letter": "A",
                "text": "2h"
            },
            {
                "letter": "B",
                "text": "2.4h"
            },
            {
                "letter": "C",
                "text": "3h"
            },
            {
                "letter": "D",
                "text": "3.5h"
            }
        ],
        "answer_letter": "B",
        "answer_text": "2.4h",
        "solution": "1/6 + 1/8 + 1/12 = 9/24.\nTime = 24/9 \u2248 2.67 hours.\nClosest answer = 2.4 h."
    },
    {
        "id": 46,
        "topic": "Mixed Word Problems",
        "question": "A sum of 5000 Php at 5% simple interest for 3 years?",
        "options": [
            {
                "letter": "A",
                "text": "5750"
            },
            {
                "letter": "B",
                "text": "5500"
            },
            {
                "letter": "C",
                "text": "5250"
            },
            {
                "letter": "D",
                "text": "5600"
            }
        ],
        "answer_letter": "A",
        "answer_text": "5750",
        "solution": "Simple Interest = 5000 \u00d7 5 \u00d7 3 /100 = 750.\nTotal = 5000 + 750 = 5750."
    },
    {
        "id": 47,
        "topic": "Mixed Word Problems",
        "question": "12 men can do work in 15 days. 10 men can do same work in?",
        "options": [
            {
                "letter": "A",
                "text": "18"
            },
            {
                "letter": "B",
                "text": "16"
            },
            {
                "letter": "C",
                "text": "20"
            },
            {
                "letter": "D",
                "text": "17"
            }
        ],
        "answer_letter": "A",
        "answer_text": "18",
        "solution": "12 \u00d7 15 = 180 man-days.\n180 \u00f7 10 = 18 days."
    },
    {
        "id": 48,
        "topic": "Mixed Word Problems",
        "question": "Product price increased by 20%, new price = 600 Php. Original price?",
        "options": [
            {
                "letter": "A",
                "text": "500"
            },
            {
                "letter": "B",
                "text": "480"
            },
            {
                "letter": "C",
                "text": "520"
            },
            {
                "letter": "D",
                "text": "550"
            }
        ],
        "answer_letter": "A",
        "answer_text": "500",
        "solution": "Original price = 600 \u00f7 1.2 = 500."
    },
    {
        "id": 49,
        "topic": "Mixed Word Problems",
        "question": "Distance between two stations = 180 km, train A speed = 60 km/h, train B = 40 km/h opposite direction. Time to meet?",
        "options": [
            {
                "letter": "A",
                "text": "1.5 h"
            },
            {
                "letter": "B",
                "text": "2 h"
            },
            {
                "letter": "C",
                "text": "2.5 h"
            },
            {
                "letter": "D",
                "text": "3 h"
            }
        ],
        "answer_letter": "B",
        "answer_text": "2 h",
        "solution": "Relative speed = 60 + 40 = 100 km/h.\n180 \u00f7 100 = 1.8 h \u2248 2 h."
    },
    {
        "id": 50,
        "topic": "Mixed Word Problems",
        "question": "5 men and 3 women complete 8 days work together. If 1 man = 2 women, days for 6 men?",
        "options": [
            {
                "letter": "A",
                "text": "5"
            },
            {
                "letter": "B",
                "text": "6"
            },
            {
                "letter": "C",
                "text": "4"
            },
            {
                "letter": "D",
                "text": "7"
            }
        ],
        "answer_letter": "B",
        "answer_text": "6",
        "solution": "1 man = 2 women.\n5 men + 3 women = 6.5 man-equivalent.\nTotal work = 6.5 \u00d7 8 = 52 man-days.\n52 \u00f7 6 = 8.67 days.\nApproximate answer = 9 days."
    }
];


const verbalGrammarQuestions = [
    {
        "id": 1,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Choose the correct sentence:",
        "options": [
            {
                "letter": "A",
                "text": "Neither of the students have submitted their paper."
            },
            {
                "letter": "B",
                "text": "Neither of the students has submitted his or her paper."
            },
            {
                "letter": "C",
                "text": "Neither of the students have submitted his paper."
            },
            {
                "letter": "D",
                "text": "Neither of the students has submitted their papers."
            }
        ],
        "answer_letter": "B",
        "answer_text": "Neither of the students has submitted his or her paper.",
        "solution": "Neither is singular; therefore, use has and the singular pronoun his or her."
    },
    {
        "id": 2,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify the error: \u201cEach of the employees are required to attend the seminar.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Each"
            },
            {
                "letter": "B",
                "text": "are"
            },
            {
                "letter": "C",
                "text": "required"
            },
            {
                "letter": "D",
                "text": "attend"
            }
        ],
        "answer_letter": "B",
        "answer_text": "are",
        "solution": "\u201cEach\u201d is singular, so it should be is required, not are required."
    },
    {
        "id": 3,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct usage of subjunctive mood:",
        "options": [
            {
                "letter": "A",
                "text": "I wish I was taller."
            },
            {
                "letter": "B",
                "text": "I wish I were taller."
            },
            {
                "letter": "C",
                "text": "I wish I am taller."
            },
            {
                "letter": "D",
                "text": "I wish I will be taller."
            }
        ],
        "answer_letter": "B",
        "answer_text": "I wish I were taller.",
        "solution": "Subjunctive mood uses were for hypothetical or unreal situations."
    },
    {
        "id": 4,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Which is correct?",
        "options": [
            {
                "letter": "A",
                "text": "He did not see nobody."
            },
            {
                "letter": "B",
                "text": "He didn\u2019t see anybody."
            },
            {
                "letter": "C",
                "text": "He saw nobody not."
            },
            {
                "letter": "D",
                "text": "He didn\u2019t saw nobody."
            }
        ],
        "answer_letter": "B",
        "answer_text": "He didn\u2019t see anybody.",
        "solution": "Standard English uses anybody in negative sentences; double negatives are incorrect."
    },
    {
        "id": 5,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Choose the proper form:",
        "options": [
            {
                "letter": "A",
                "text": "She has went to the market."
            },
            {
                "letter": "B",
                "text": "She has gone to the market."
            },
            {
                "letter": "C",
                "text": "She have gone to the market."
            },
            {
                "letter": "D",
                "text": "She has going to the market."
            }
        ],
        "answer_letter": "B",
        "answer_text": "She has gone to the market.",
        "solution": "Present perfect requires gone, not went."
    },
    {
        "id": 6,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct pronoun reference:",
        "options": [
            {
                "letter": "A",
                "text": "Every student must submit their essay."
            },
            {
                "letter": "B",
                "text": "Every student must submit his or her essay."
            },
            {
                "letter": "C",
                "text": "Every student must submit his essay only."
            },
            {
                "letter": "D",
                "text": "Every student must submit its essay."
            }
        ],
        "answer_letter": "B",
        "answer_text": "Every student must submit his or her essay.",
        "solution": "Singular subject every student takes a singular pronoun."
    },
    {
        "id": 7,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Fill in the blank with correct preposition: \u201cHe is good ___ playing chess.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "in"
            },
            {
                "letter": "B",
                "text": "at"
            },
            {
                "letter": "C",
                "text": "on"
            },
            {
                "letter": "D",
                "text": "for"
            }
        ],
        "answer_letter": "B",
        "answer_text": "at",
        "solution": "Correct expression is good at."
    },
    {
        "id": 8,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct subject-verb agreement:",
        "options": [
            {
                "letter": "A",
                "text": "The number of students are increasing."
            },
            {
                "letter": "B",
                "text": "The number of students is increasing."
            },
            {
                "letter": "C",
                "text": "The numbers of students is increasing."
            },
            {
                "letter": "D",
                "text": "The number of student are increasing."
            }
        ],
        "answer_letter": "B",
        "answer_text": "The number of students is increasing.",
        "solution": "The subject is The number, which is singular."
    },
    {
        "id": 9,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify the error: \u201cShe suggested to go to the museum tomorrow.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "suggested"
            },
            {
                "letter": "B",
                "text": "to go"
            },
            {
                "letter": "C",
                "text": "tomorrow"
            },
            {
                "letter": "D",
                "text": "museum"
            }
        ],
        "answer_letter": "B",
        "answer_text": "to go",
        "solution": "Correct form: \u201cShe suggested going to the museum tomorrow.\u201d"
    },
    {
        "id": 10,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Choose correct sentence:",
        "options": [
            {
                "letter": "A",
                "text": "I look forward to meet you."
            },
            {
                "letter": "B",
                "text": "I look forward to meeting you."
            },
            {
                "letter": "C",
                "text": "I look forward to met you."
            },
            {
                "letter": "D",
                "text": "I look forward to meets you."
            }
        ],
        "answer_letter": "B",
        "answer_text": "I look forward to meeting you.",
        "solution": "\u201cLook forward to\u201d is followed by a gerund (-ing form)."
    },
    {
        "id": 11,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct usage:",
        "options": [
            {
                "letter": "A",
                "text": "Fewer people attended the lecture than last week."
            },
            {
                "letter": "B",
                "text": "Less people attended the lecture than last week."
            },
            {
                "letter": "C",
                "text": "Few people attended the lecture than last week."
            },
            {
                "letter": "D",
                "text": "Little people attended the lecture than last week."
            }
        ],
        "answer_letter": "A",
        "answer_text": "Fewer people attended the lecture than last week.",
        "solution": "Fewer is used for countable nouns."
    },
    {
        "id": 12,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct comparative form:",
        "options": [
            {
                "letter": "A",
                "text": "This problem is more easier than the previous one."
            },
            {
                "letter": "B",
                "text": "This problem is easier than the previous one."
            },
            {
                "letter": "C",
                "text": "This problem is most easier than the previous one."
            },
            {
                "letter": "D",
                "text": "This problem is more easyer than the previous one."
            }
        ],
        "answer_letter": "B",
        "answer_text": "This problem is easier than the previous one.",
        "solution": "Comparative of easy is easier."
    },
    {
        "id": 13,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify the error: \u201cHe is one of those men who has always been honest.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "one"
            },
            {
                "letter": "B",
                "text": "has"
            },
            {
                "letter": "C",
                "text": "always"
            },
            {
                "letter": "D",
                "text": "honest"
            }
        ],
        "answer_letter": "B",
        "answer_text": "has",
        "solution": "The relative clause refers to plural men, so it should be have."
    },
    {
        "id": 14,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct adverb placement:",
        "options": [
            {
                "letter": "A",
                "text": "She quickly ran to the store."
            },
            {
                "letter": "B",
                "text": "She ran quickly to the store."
            },
            {
                "letter": "C",
                "text": "She ran to the store quickly."
            },
            {
                "letter": "D",
                "text": "All of the above."
            }
        ],
        "answer_letter": "D",
        "answer_text": "All of the above.",
        "solution": "The adverb can be correctly placed in all three positions."
    },
    {
        "id": 15,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct use of conjunction:",
        "options": [
            {
                "letter": "A",
                "text": "I studied hard, so I passed the exam."
            },
            {
                "letter": "B",
                "text": "I studied hard, therefore I passed the exam."
            },
            {
                "letter": "C",
                "text": "I studied hard, but I passed the exam."
            },
            {
                "letter": "D",
                "text": "I studied hard, however I passed the exam."
            }
        ],
        "answer_letter": "A",
        "answer_text": "I studied hard, so I passed the exam.",
        "solution": "So correctly expresses cause and effect."
    },
    {
        "id": 16,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify the dangling modifier:",
        "options": [
            {
                "letter": "A",
                "text": "Walking down the street, the flowers were beautiful."
            },
            {
                "letter": "B",
                "text": "Walking down the street, I saw beautiful flowers."
            },
            {
                "letter": "C",
                "text": "The flowers were beautiful while walking down the street."
            },
            {
                "letter": "D",
                "text": "I walked down the street, beautiful flowers."
            }
        ],
        "answer_letter": "A",
        "answer_text": "Walking down the street, the flowers were beautiful.",
        "solution": "Dangling modifier.\nCorrection: \u201cWalking down the street, I saw beautiful flowers.\u201d"
    },
    {
        "id": 17,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct plural form:",
        "options": [
            {
                "letter": "A",
                "text": "Criterion \u2192 Criterions"
            },
            {
                "letter": "B",
                "text": "Criterion \u2192 Criteria"
            },
            {
                "letter": "C",
                "text": "Criterion \u2192 Criterion"
            },
            {
                "letter": "D",
                "text": "Criterion \u2192 Criteriae"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Criterion \u2192 Criteria",
        "solution": "Singular criterion, plural criteria."
    },
    {
        "id": 18,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Choose correct sentence:",
        "options": [
            {
                "letter": "A",
                "text": "He is taller than me."
            },
            {
                "letter": "B",
                "text": "He is taller than I."
            },
            {
                "letter": "C",
                "text": "He is taller than myself."
            },
            {
                "letter": "D",
                "text": "He is taller than mine."
            }
        ],
        "answer_letter": "B",
        "answer_text": "He is taller than I.",
        "solution": "Grammatically correct; implied phrase is \u201cthan I am.\u201d"
    },
    {
        "id": 19,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct punctuation:",
        "options": [
            {
                "letter": "A",
                "text": "Its raining outside."
            },
            {
                "letter": "B",
                "text": "It\u2019s raining outside."
            },
            {
                "letter": "C",
                "text": "Its\u2019 raining outside."
            },
            {
                "letter": "D",
                "text": "Its raining, outside."
            }
        ],
        "answer_letter": "B",
        "answer_text": "It\u2019s raining outside.",
        "solution": "It\u2019s = it is; its is possessive."
    },
    {
        "id": 20,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify the error: \u201cI invited John, my best friend, and his brother.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "I"
            },
            {
                "letter": "B",
                "text": "John"
            },
            {
                "letter": "C",
                "text": "my best friend"
            },
            {
                "letter": "D",
                "text": "and his brother"
            }
        ],
        "answer_letter": "D",
        "answer_text": "and his brother",
        "solution": "Commas correctly separate the appositive phrase."
    },
    {
        "id": 21,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Choose the correct conditional:",
        "options": [
            {
                "letter": "A",
                "text": "If I would have known, I would have helped."
            },
            {
                "letter": "B",
                "text": "If I had known, I would have helped."
            },
            {
                "letter": "C",
                "text": "If I knew, I would have helped."
            },
            {
                "letter": "D",
                "text": "If I know, I would have helped."
            }
        ],
        "answer_letter": "B",
        "answer_text": "If I had known, I would have helped.",
        "solution": "Correct third conditional structure."
    },
    {
        "id": 22,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct relative pronoun:",
        "options": [
            {
                "letter": "A",
                "text": "The book who I borrowed is on the table."
            },
            {
                "letter": "B",
                "text": "The book which I borrowed is on the table."
            },
            {
                "letter": "C",
                "text": "The book that I borrowed it is on the table."
            },
            {
                "letter": "D",
                "text": "The book which I borrowed it is on the table."
            }
        ],
        "answer_letter": "B",
        "answer_text": "The book which I borrowed is on the table.",
        "solution": "Which correctly refers to a thing."
    },
    {
        "id": 23,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct tense: \u201cBy the time he arrives, we ___ already finished dinner.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "have"
            },
            {
                "letter": "B",
                "text": "has"
            },
            {
                "letter": "C",
                "text": "will have"
            },
            {
                "letter": "D",
                "text": "had"
            }
        ],
        "answer_letter": "C",
        "answer_text": "will have",
        "solution": "Future perfect tense is required."
    },
    {
        "id": 24,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify incorrect use: \u201cI am interesting in learning new languages.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "am"
            },
            {
                "letter": "B",
                "text": "interesting"
            },
            {
                "letter": "C",
                "text": "in"
            },
            {
                "letter": "D",
                "text": "learning"
            }
        ],
        "answer_letter": "B",
        "answer_text": "interesting",
        "solution": "Should be interested."
    },
    {
        "id": 25,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct idiom:",
        "options": [
            {
                "letter": "A",
                "text": "She let the cat out of the bag."
            },
            {
                "letter": "B",
                "text": "She let the cat out from the bag."
            },
            {
                "letter": "C",
                "text": "She let the cat in the bag."
            },
            {
                "letter": "D",
                "text": "She let the cat outside the bag."
            }
        ],
        "answer_letter": "A",
        "answer_text": "She let the cat out of the bag.",
        "solution": "Idiom meaning to reveal a secret."
    },
    {
        "id": 26,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct article:",
        "options": [
            {
                "letter": "A",
                "text": "I saw a eagle flying."
            },
            {
                "letter": "B",
                "text": "I saw an eagle flying."
            },
            {
                "letter": "C",
                "text": "I saw eagle flying."
            },
            {
                "letter": "D",
                "text": "I saw the eagle flying."
            }
        ],
        "answer_letter": "B",
        "answer_text": "I saw an eagle flying.",
        "solution": "Use an before a vowel sound."
    },
    {
        "id": 27,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct sentence:",
        "options": [
            {
                "letter": "A",
                "text": "He don't like spicy food."
            },
            {
                "letter": "B",
                "text": "He doesn't like spicy food."
            },
            {
                "letter": "C",
                "text": "He didn't liked spicy food."
            },
            {
                "letter": "D",
                "text": "He doesn't likes spicy food."
            }
        ],
        "answer_letter": "B",
        "answer_text": "He doesn't like spicy food.",
        "solution": "Third-person singular uses doesn\u2019t."
    },
    {
        "id": 28,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify the error: \u201cRunning quickly, the finish line was reached.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Running quickly"
            },
            {
                "letter": "B",
                "text": "finish line"
            },
            {
                "letter": "C",
                "text": "was reached"
            },
            {
                "letter": "D",
                "text": "No error"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Running quickly",
        "solution": "The subject should be the person running, not the finish line."
    },
    {
        "id": 29,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct parallel structure:",
        "options": [
            {
                "letter": "A",
                "text": "She likes reading, to swim, and cooking."
            },
            {
                "letter": "B",
                "text": "She likes to read, swimming, and cook."
            },
            {
                "letter": "C",
                "text": "She likes reading, swimming, and cooking."
            },
            {
                "letter": "D",
                "text": "She likes to read, to swim, and cooking."
            }
        ],
        "answer_letter": "C",
        "answer_text": "She likes reading, swimming, and cooking.",
        "solution": "Correct parallel structure using all -ing forms."
    },
    {
        "id": 30,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct word choice:",
        "options": [
            {
                "letter": "A",
                "text": "I could care less about his opinion."
            },
            {
                "letter": "B",
                "text": "I couldn\u2019t care less about his opinion."
            },
            {
                "letter": "C",
                "text": "I could care least about his opinion."
            },
            {
                "letter": "D",
                "text": "I couldn\u2019t care least about his opinion."
            }
        ],
        "answer_letter": "B",
        "answer_text": "I couldn\u2019t care less about his opinion.",
        "solution": "Standard idiom meaning no concern at all."
    },
    {
        "id": 31,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct preposition: \u201cHe is responsible ___ the project.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "of"
            },
            {
                "letter": "B",
                "text": "for"
            },
            {
                "letter": "C",
                "text": "to"
            },
            {
                "letter": "D",
                "text": "on"
            }
        ],
        "answer_letter": "B",
        "answer_text": "for",
        "solution": "Correct preposition is for."
    },
    {
        "id": 32,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct verb form: \u201cShe insisted that he ___ the meeting.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "attend"
            },
            {
                "letter": "B",
                "text": "attends"
            },
            {
                "letter": "C",
                "text": "attended"
            },
            {
                "letter": "D",
                "text": "attending"
            }
        ],
        "answer_letter": "A",
        "answer_text": "attend",
        "solution": "Subjunctive mood uses the base form of the verb."
    },
    {
        "id": 33,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Correct sentence:",
        "options": [
            {
                "letter": "A",
                "text": "I have never seen so beautiful a sunset."
            },
            {
                "letter": "B",
                "text": "I have never seen so beautiful sunset."
            },
            {
                "letter": "C",
                "text": "I have never seen such a beautiful sunset."
            },
            {
                "letter": "D",
                "text": "Both A and C"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Both A and C",
        "solution": "Both expressions are grammatically correct."
    },
    {
        "id": 34,
        "topic": "ENGLISH GRAMMAR & USAGE",
        "question": "Identify incorrect use: \u201cHe suggested that we goes to the museum.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "suggested"
            },
            {
                "letter": "B",
                "text": "that"
            },
            {
                "letter": "C",
                "text": "goes"
            },
            {
                "letter": "D",
                "text": "museum"
            }
        ],
        "answer_letter": "C",
        "answer_text": "goes",
        "solution": "After \u201csuggested that,\u201d use the base form go."
    },
    {
        "id": 35,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Correct conditional:",
        "options": [
            {
                "letter": "A",
                "text": "Had I known, I would have attended."
            },
            {
                "letter": "B",
                "text": "If I knew, I would have attended."
            },
            {
                "letter": "C",
                "text": "If I know, I would have attended."
            },
            {
                "letter": "D",
                "text": "Had I knew, I would have attended.\n\nPART II \u2013 FILIPINO GRAMMAR & USAGE (36\u201350)"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Had I known, I would have attended.",
        "solution": "Correct inversion of the third conditional.\n\nPART II \u2013 FILIPINO GRAMMAR & USAGE (36\u201350)"
    },
    {
        "id": 36,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Pumili ng tama: \u201cAng bawat isa sa kanila ___ dumalo sa pagtitipon.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "ay"
            },
            {
                "letter": "B",
                "text": "ay mga"
            },
            {
                "letter": "C",
                "text": "ang"
            },
            {
                "letter": "D",
                "text": "ay ang"
            }
        ],
        "answer_letter": "A",
        "answer_text": "ay",
        "solution": "Correct singular linking verb."
    },
    {
        "id": 37,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama? \u201cKumain siya nang mabilis at ___ uminom ng tubig.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "saka"
            },
            {
                "letter": "B",
                "text": "at saka"
            },
            {
                "letter": "C",
                "text": "at"
            },
            {
                "letter": "D",
                "text": "habang"
            }
        ],
        "answer_letter": "A",
        "answer_text": "saka",
        "solution": "Correct connector for sequential actions."
    },
    {
        "id": 38,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Pumili ng wastong panghalip: \u201cAng guro ay pinuri ang estudyante dahil ___ ay masipag.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "siya"
            },
            {
                "letter": "B",
                "text": "kanya"
            },
            {
                "letter": "C",
                "text": "kaniya"
            },
            {
                "letter": "D",
                "text": "sila"
            }
        ],
        "answer_letter": "A",
        "answer_text": "siya",
        "solution": "Correct subject pronoun for a singular third person."
    },
    {
        "id": 39,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama: \u201cKung ako ___ mas mayaman, bibili ako ng bagong bahay.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "ay"
            },
            {
                "letter": "B",
                "text": "maging"
            },
            {
                "letter": "C",
                "text": "ay maging"
            },
            {
                "letter": "D",
                "text": "sana"
            }
        ],
        "answer_letter": "B",
        "answer_text": "maging",
        "solution": "Correct form for a hypothetical condition."
    },
    {
        "id": 40,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Pumili ng wastong pang-ukol: \u201cNasa ibabaw ng mesa ang mga aklat, hindi ___ ilalim.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "sa"
            },
            {
                "letter": "B",
                "text": "ng"
            },
            {
                "letter": "C",
                "text": "sa ilalim"
            },
            {
                "letter": "D",
                "text": "sa ibabaw"
            }
        ],
        "answer_letter": "C",
        "answer_text": "sa ilalim",
        "solution": "Correct prepositional phrase indicating location."
    },
    {
        "id": 41,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama? \u201cSi Maria at si Juan ___ pumunta sa parke kahapon.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "ay"
            },
            {
                "letter": "B",
                "text": "ay mga"
            },
            {
                "letter": "C",
                "text": "ay ang"
            },
            {
                "letter": "D",
                "text": "ay sina"
            }
        ],
        "answer_letter": "A",
        "answer_text": "ay",
        "solution": "Correct linking verb for a compound subject."
    },
    {
        "id": 42,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama: \u201cMasipag si Ana kaysa ___.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "siya"
            },
            {
                "letter": "B",
                "text": "kanya"
            },
            {
                "letter": "C",
                "text": "kaniya"
            },
            {
                "letter": "D",
                "text": "sa kanya"
            }
        ],
        "answer_letter": "D",
        "answer_text": "sa kanya",
        "solution": "Correct comparative phrase: \u201cMasipag si Ana kaysa sa kanya.\u201d"
    },
    {
        "id": 43,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Pumili ng wastong pandiwa: \u201cSi Pedro ___ ng liham sa kanyang kaibigan.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "nagsulat"
            },
            {
                "letter": "B",
                "text": "sumulat"
            },
            {
                "letter": "C",
                "text": "magsulat"
            },
            {
                "letter": "D",
                "text": "sumusulat"
            }
        ],
        "answer_letter": "B",
        "answer_text": "sumulat",
        "solution": "Correct verb form for completed action."
    },
    {
        "id": 44,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama: \u201cPinipili ko ang kulay na ___ sa silid mo.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "bagay"
            },
            {
                "letter": "B",
                "text": "nabagay"
            },
            {
                "letter": "C",
                "text": "babagay"
            },
            {
                "letter": "D",
                "text": "angkop"
            }
        ],
        "answer_letter": "B",
        "answer_text": "nabagay",
        "solution": "Correct participle to match \u201ckulay na nabagay sa silid.\u201d"
    },
    {
        "id": 45,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Pumili ng wastong pangatnig: \u201cHindi lamang siya maganda, ___ siya rin ay matalino.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "at"
            },
            {
                "letter": "B",
                "text": "kundi"
            },
            {
                "letter": "C",
                "text": "ngunit"
            },
            {
                "letter": "D",
                "text": "at kundi"
            }
        ],
        "answer_letter": "B",
        "answer_text": "kundi",
        "solution": "Correct structure is \u201cHindi lamang... kundi...\u201d"
    },
    {
        "id": 46,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama: \u201c___ sa lahat ng estudyante ang nakakuha ng mataas na marka?\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Sino"
            },
            {
                "letter": "B",
                "text": "Kanino"
            },
            {
                "letter": "C",
                "text": "Saan"
            },
            {
                "letter": "D",
                "text": "Ano"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Sino",
        "solution": "Interrogative word used for a person or subject."
    },
    {
        "id": 47,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Pumili ng tama: \u201cSi Marco ay mas matalino ___ kay Lito.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "sa"
            },
            {
                "letter": "B",
                "text": "kaysa"
            },
            {
                "letter": "C",
                "text": "kaysa sa"
            },
            {
                "letter": "D",
                "text": "kesa kay"
            }
        ],
        "answer_letter": "C",
        "answer_text": "kaysa sa",
        "solution": "Correct comparative expression."
    },
    {
        "id": 48,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama: \u201cAng bahay ___ nakatayo sa tabi ng ilog ay luma na.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "na"
            },
            {
                "letter": "B",
                "text": "na ang"
            },
            {
                "letter": "C",
                "text": "na ang nakatayo"
            },
            {
                "letter": "D",
                "text": "na ang nakatayo sa"
            }
        ],
        "answer_letter": "A",
        "answer_text": "na",
        "solution": "Correct linker between noun and clause."
    },
    {
        "id": 49,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Pumili ng wastong pang-abay: \u201cTumakbo siya nang mabilis ___ maabutan niya ang bus.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "upang"
            },
            {
                "letter": "B",
                "text": "upang na"
            },
            {
                "letter": "C",
                "text": "kaya"
            },
            {
                "letter": "D",
                "text": "para"
            }
        ],
        "answer_letter": "A",
        "answer_text": "upang",
        "solution": "Correct purpose connector."
    },
    {
        "id": 50,
        "topic": "FILIPINO GRAMMAR & USAGE",
        "question": "Alin ang tama: \u201cAng mga bata ay naglaro sa labas ___ umulan.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "bago"
            },
            {
                "letter": "B",
                "text": "bago pa man"
            },
            {
                "letter": "C",
                "text": "habang"
            },
            {
                "letter": "D",
                "text": "matapos"
            }
        ],
        "answer_letter": "A",
        "answer_text": "bago",
        "solution": "Action occurred before the rain."
    }
];


const verbalVocabQuestions = [
    {
        "id": 1,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose the word closest in meaning to \u201cobfuscate\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Clarify"
            },
            {
                "letter": "B",
                "text": "Confuse"
            },
            {
                "letter": "C",
                "text": "Illuminate"
            },
            {
                "letter": "D",
                "text": "Simplify"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Confuse",
        "solution": "Obfuscate means to make something unclear or confusing."
    },
    {
        "id": 2,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose the word opposite in meaning to \u201cephemeral\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Fleeting"
            },
            {
                "letter": "B",
                "text": "Permanent"
            },
            {
                "letter": "C",
                "text": "Short-lived"
            },
            {
                "letter": "D",
                "text": "Temporary"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Permanent",
        "solution": "Ephemeral = short-lived; opposite = permanent."
    },
    {
        "id": 3,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose the correct synonym of \u201cperfidious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Loyal"
            },
            {
                "letter": "B",
                "text": "Treacherous"
            },
            {
                "letter": "C",
                "text": "Honest"
            },
            {
                "letter": "D",
                "text": "Faithful"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Treacherous",
        "solution": "Perfidious = deceitful or untrustworthy."
    },
    {
        "id": 4,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose the word closest in meaning to \u201clachrymose\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Tearful"
            },
            {
                "letter": "B",
                "text": "Joyful"
            },
            {
                "letter": "C",
                "text": "Indifferent"
            },
            {
                "letter": "D",
                "text": "Humorous"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Tearful",
        "solution": "Lachrymose = inclined to shed tears; tearful."
    },
    {
        "id": 5,
        "topic": "ENGLISH VOCABULARY",
        "question": "Identify the meaning of \u201cpugnacious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Peaceful"
            },
            {
                "letter": "B",
                "text": "Combative"
            },
            {
                "letter": "C",
                "text": "Friendly"
            },
            {
                "letter": "D",
                "text": "Humble"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Combative",
        "solution": "Pugnacious = eager to fight or quarrel."
    },
    {
        "id": 6,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose the word opposite in meaning to \u201cgregarious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Sociable"
            },
            {
                "letter": "B",
                "text": "Shy"
            },
            {
                "letter": "C",
                "text": "Outgoing"
            },
            {
                "letter": "D",
                "text": "Friendly"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Shy",
        "solution": "Gregarious = sociable; opposite = shy/unsociable."
    },
    {
        "id": 7,
        "topic": "ENGLISH VOCABULARY",
        "question": "Synonym of \u201cabstruse\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Obvious"
            },
            {
                "letter": "B",
                "text": "Difficult"
            },
            {
                "letter": "C",
                "text": "Simple"
            },
            {
                "letter": "D",
                "text": "Clear"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Difficult",
        "solution": "Abstruse = hard to understand; obscure."
    },
    {
        "id": 8,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose the closest in meaning: \u201cmunificent\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Stingy"
            },
            {
                "letter": "B",
                "text": "Generous"
            },
            {
                "letter": "C",
                "text": "Unkind"
            },
            {
                "letter": "D",
                "text": "Miserly"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Generous",
        "solution": "Munificent = very generous."
    },
    {
        "id": 9,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose the word that best completes the sentence:\n\u201cHe approached the problem with great ___.\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Alacrity"
            },
            {
                "letter": "B",
                "text": "Apathy"
            },
            {
                "letter": "C",
                "text": "Lethargy"
            },
            {
                "letter": "D",
                "text": "Indifference"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Alacrity",
        "solution": "Alacrity = brisk and cheerful readiness."
    },
    {
        "id": 10,
        "topic": "ENGLISH VOCABULARY",
        "question": "Synonym of \u201cinscrutable\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Transparent"
            },
            {
                "letter": "B",
                "text": "Mysterious"
            },
            {
                "letter": "C",
                "text": "Clear"
            },
            {
                "letter": "D",
                "text": "Obvious"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Mysterious",
        "solution": "Inscrutable = impossible to understand or interpret."
    },
    {
        "id": 11,
        "topic": "ENGLISH VOCABULARY",
        "question": "Opposite of \u201cinchoate\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Fully developed"
            },
            {
                "letter": "B",
                "text": "Initial"
            },
            {
                "letter": "C",
                "text": "Incomplete"
            },
            {
                "letter": "D",
                "text": "Rudimentary"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Fully developed",
        "solution": "Inchoate = just begun; not fully formed; opposite = fully developed."
    },
    {
        "id": 12,
        "topic": "ENGLISH VOCABULARY",
        "question": "Meaning of \u201ctaciturn\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Talkative"
            },
            {
                "letter": "B",
                "text": "Silent"
            },
            {
                "letter": "C",
                "text": "Cheerful"
            },
            {
                "letter": "D",
                "text": "Loud"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Silent",
        "solution": "Taciturn = habitually quiet, reserved."
    },
    {
        "id": 13,
        "topic": "ENGLISH VOCABULARY",
        "question": "Synonym of \u201ccallous\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Kind"
            },
            {
                "letter": "B",
                "text": "Heartless"
            },
            {
                "letter": "C",
                "text": "Compassionate"
            },
            {
                "letter": "D",
                "text": "Friendly"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Heartless",
        "solution": "Callous = showing cruel disregard for others."
    },
    {
        "id": 14,
        "topic": "ENGLISH VOCABULARY",
        "question": "Meaning of \u201ciconoclast\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Rule-follower"
            },
            {
                "letter": "B",
                "text": "Rebel against tradition"
            },
            {
                "letter": "C",
                "text": "Loyalist"
            },
            {
                "letter": "D",
                "text": "Conservative"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Rebel against tradition",
        "solution": "Iconoclast = one who attacks or ignores traditional beliefs."
    },
    {
        "id": 15,
        "topic": "ENGLISH VOCABULARY",
        "question": "Word closest in meaning to \u201csagacious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Foolish"
            },
            {
                "letter": "B",
                "text": "Wise"
            },
            {
                "letter": "C",
                "text": "Careless"
            },
            {
                "letter": "D",
                "text": "Silly"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Wise",
        "solution": "Sagacious = having keen judgment; wise."
    },
    {
        "id": 16,
        "topic": "ENGLISH VOCABULARY",
        "question": "Opposite of \u201cvociferous\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Quiet"
            },
            {
                "letter": "B",
                "text": "Loud"
            },
            {
                "letter": "C",
                "text": "Boisterous"
            },
            {
                "letter": "D",
                "text": "Noisy"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Quiet",
        "solution": "Vociferous = loud and vehement; opposite = quiet."
    },
    {
        "id": 17,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose synonym of \u201cenervate\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Energize"
            },
            {
                "letter": "B",
                "text": "Weaken"
            },
            {
                "letter": "C",
                "text": "Strengthen"
            },
            {
                "letter": "D",
                "text": "Revive"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Weaken",
        "solution": "Enervate = to drain of energy or weaken."
    },
    {
        "id": 18,
        "topic": "ENGLISH VOCABULARY",
        "question": "Closest meaning: \u201crecalcitrant\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Obedient"
            },
            {
                "letter": "B",
                "text": "Stubborn"
            },
            {
                "letter": "C",
                "text": "Compliant"
            },
            {
                "letter": "D",
                "text": "Docile"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Stubborn",
        "solution": "Recalcitrant = stubbornly resisting authority."
    },
    {
        "id": 19,
        "topic": "ENGLISH VOCABULARY",
        "question": "Meaning of \u201cinsidious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Harmful in a subtle way"
            },
            {
                "letter": "B",
                "text": "Openly dangerous"
            },
            {
                "letter": "C",
                "text": "Harmless"
            },
            {
                "letter": "D",
                "text": "Transparent"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Harmful in a subtle way",
        "solution": "Insidious = gradual, subtle, and harmful."
    },
    {
        "id": 20,
        "topic": "ENGLISH VOCABULARY",
        "question": "Choose synonym of \u201caccolade\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Award"
            },
            {
                "letter": "B",
                "text": "Punishment"
            },
            {
                "letter": "C",
                "text": "Criticism"
            },
            {
                "letter": "D",
                "text": "Rebuke"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Award",
        "solution": "Accolade = praise or award for achievement."
    },
    {
        "id": 21,
        "topic": "ENGLISH VOCABULARY",
        "question": "Closest meaning: \u201cesoteric\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Common knowledge"
            },
            {
                "letter": "B",
                "text": "Understood by few"
            },
            {
                "letter": "C",
                "text": "Universal"
            },
            {
                "letter": "D",
                "text": "Obvious"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Understood by few",
        "solution": "Esoteric = intended for or understood by a small group."
    },
    {
        "id": 22,
        "topic": "ENGLISH VOCABULARY",
        "question": "Opposite of \u201csuperfluous\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Necessary"
            },
            {
                "letter": "B",
                "text": "Excessive"
            },
            {
                "letter": "C",
                "text": "Redundant"
            },
            {
                "letter": "D",
                "text": "Extra"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Necessary",
        "solution": "Superfluous = unnecessary; opposite = necessary."
    },
    {
        "id": 23,
        "topic": "ENGLISH VOCABULARY",
        "question": "Meaning of \u201cpulchritude\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Ugliness"
            },
            {
                "letter": "B",
                "text": "Beauty"
            },
            {
                "letter": "C",
                "text": "Strength"
            },
            {
                "letter": "D",
                "text": "Intelligence"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Beauty",
        "solution": "Pulchritude = physical beauty."
    },
    {
        "id": 24,
        "topic": "ENGLISH VOCABULARY",
        "question": "Word closest in meaning to \u201cantediluvian\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Modern"
            },
            {
                "letter": "B",
                "text": "Extremely old-fashioned"
            },
            {
                "letter": "C",
                "text": "Innovative"
            },
            {
                "letter": "D",
                "text": "Contemporary"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Extremely old-fashioned",
        "solution": "Antediluvian = very old, outdated."
    },
    {
        "id": 25,
        "topic": "ENGLISH VOCABULARY",
        "question": "Synonym of \u201ctemerity\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Audacity"
            },
            {
                "letter": "B",
                "text": "Caution"
            },
            {
                "letter": "C",
                "text": "Prudence"
            },
            {
                "letter": "D",
                "text": "Hesitation"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Audacity",
        "solution": "Temerity = reckless boldness; audacity."
    },
    {
        "id": 26,
        "topic": "ENGLISH VOCABULARY",
        "question": "Meaning of \u201cobstreperous\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Noisy and unruly"
            },
            {
                "letter": "B",
                "text": "Calm"
            },
            {
                "letter": "C",
                "text": "Quiet"
            },
            {
                "letter": "D",
                "text": "Gentle"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Noisy and unruly",
        "solution": "Obstreperous = noisy, difficult to control."
    },
    {
        "id": 27,
        "topic": "ENGLISH VOCABULARY",
        "question": "Opposite of \u201cmercurial\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Stable"
            },
            {
                "letter": "B",
                "text": "Fickle"
            },
            {
                "letter": "C",
                "text": "Erratic"
            },
            {
                "letter": "D",
                "text": "Capricious"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Stable",
        "solution": "Mercurial = changeable; opposite = stable."
    },
    {
        "id": 28,
        "topic": "ENGLISH VOCABULARY",
        "question": "Closest in meaning to \u201cnefarious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Wicked"
            },
            {
                "letter": "B",
                "text": "Good"
            },
            {
                "letter": "C",
                "text": "Honorable"
            },
            {
                "letter": "D",
                "text": "Noble"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Wicked",
        "solution": "Nefarious = extremely wicked or villainous."
    },
    {
        "id": 29,
        "topic": "ENGLISH VOCABULARY",
        "question": "Synonym of \u201cabnegation\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Self-denial"
            },
            {
                "letter": "B",
                "text": "Indulgence"
            },
            {
                "letter": "C",
                "text": "Greed"
            },
            {
                "letter": "D",
                "text": "Selfishness"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Self-denial",
        "solution": "Abnegation = renouncing personal desires; self-denial."
    },
    {
        "id": 30,
        "topic": "ENGLISH VOCABULARY",
        "question": "Meaning of \u201cintransigent\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Flexible"
            },
            {
                "letter": "B",
                "text": "Stubborn"
            },
            {
                "letter": "C",
                "text": "Yielding"
            },
            {
                "letter": "D",
                "text": "Compliant"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Stubborn",
        "solution": "Intransigent = unwilling to change opinions or compromise."
    },
    {
        "id": 31,
        "topic": "ENGLISH VOCABULARY",
        "question": "Word closest in meaning to \u201cperfunctory\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Careless"
            },
            {
                "letter": "B",
                "text": "Thorough"
            },
            {
                "letter": "C",
                "text": "Meticulous"
            },
            {
                "letter": "D",
                "text": "Diligent"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Careless",
        "solution": "Perfunctory = done mechanically, without care."
    },
    {
        "id": 32,
        "topic": "ENGLISH VOCABULARY",
        "question": "Synonym of \u201cmendacious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Truthful"
            },
            {
                "letter": "B",
                "text": "Lying"
            },
            {
                "letter": "C",
                "text": "Honest"
            },
            {
                "letter": "D",
                "text": "Accurate"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Lying",
        "solution": "Mendacious = not telling the truth."
    },
    {
        "id": 33,
        "topic": "ENGLISH VOCABULARY",
        "question": "Opposite of \u201clugubrious\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Cheerful"
            },
            {
                "letter": "B",
                "text": "Sorrowful"
            },
            {
                "letter": "C",
                "text": "Sad"
            },
            {
                "letter": "D",
                "text": "Mournful"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Cheerful",
        "solution": "Lugubrious = mournful, gloomy; opposite = cheerful."
    },
    {
        "id": 34,
        "topic": "ENGLISH VOCABULARY",
        "question": "Meaning of \u201cabrogate\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Revoke"
            },
            {
                "letter": "B",
                "text": "Establish"
            },
            {
                "letter": "C",
                "text": "Create"
            },
            {
                "letter": "D",
                "text": "Initiate"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Revoke",
        "solution": "Abrogate = to abolish or cancel formally."
    },
    {
        "id": 35,
        "topic": "FILIPINO VOCABULARY",
        "question": "Closest in meaning: \u201cpellucid\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Opaque"
            },
            {
                "letter": "B",
                "text": "Transparent"
            },
            {
                "letter": "C",
                "text": "Cloudy"
            },
            {
                "letter": "D",
                "text": "Murky\nPART II \u2013 FILIPINO VOCABULARY (36\u201350)"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Transparent",
        "solution": "Pellucid = clear, transparent.\n\nPART II \u2013 FILIPINO VOCABULARY (36\u201350)"
    },
    {
        "id": 36,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmapanghamon\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Mahiyain"
            },
            {
                "letter": "B",
                "text": "Pumupukaw ng hamon"
            },
            {
                "letter": "C",
                "text": "Masunurin"
            },
            {
                "letter": "D",
                "text": "Mahina"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Pumupukaw ng hamon",
        "solution": "Mapanghamon = challenging, provocative."
    },
    {
        "id": 37,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmatatag\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Malambot"
            },
            {
                "letter": "B",
                "text": "Matibay"
            },
            {
                "letter": "C",
                "text": "Marupok"
            },
            {
                "letter": "D",
                "text": "Mahina"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Matibay",
        "solution": "Matatag = firm, resilient, strong."
    },
    {
        "id": 38,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cpalasak\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Karaniwan"
            },
            {
                "letter": "B",
                "text": "Bihira"
            },
            {
                "letter": "C",
                "text": "Natatangi"
            },
            {
                "letter": "D",
                "text": "Iba"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Karaniwan",
        "solution": "Palasak = common, prevalent."
    },
    {
        "id": 39,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmapanuri\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Nagmamasid at tumatasa"
            },
            {
                "letter": "B",
                "text": "Walang pakialam"
            },
            {
                "letter": "C",
                "text": "Tamad"
            },
            {
                "letter": "D",
                "text": "Walang pinag-aralan"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Nagmamasid at tumatasa",
        "solution": "Mapanuri = analytical, observant, critical."
    },
    {
        "id": 40,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmaawain\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Mapagkawanggawa"
            },
            {
                "letter": "B",
                "text": "Walang pakialam"
            },
            {
                "letter": "C",
                "text": "Malupit"
            },
            {
                "letter": "D",
                "text": "Salbahe"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Mapagkawanggawa",
        "solution": "Maawain = compassionate, merciful."
    },
    {
        "id": 41,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmapagsamantalang tao\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Mapagbigay"
            },
            {
                "letter": "B",
                "text": "Makasarili"
            },
            {
                "letter": "C",
                "text": "Mapagkakatiwalaan"
            },
            {
                "letter": "D",
                "text": "Maalalahanin"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Makasarili",
        "solution": "Mapagsamantalang tao = exploitative, selfish person."
    },
    {
        "id": 42,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cpalasintahan\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Matapat"
            },
            {
                "letter": "B",
                "text": "Marupok ang loob"
            },
            {
                "letter": "C",
                "text": "Maalalahanin"
            },
            {
                "letter": "D",
                "text": "Mapagkakatiwalaan"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Marupok ang loob",
        "solution": "Palasintahan = easily influenced emotionally; weak-willed."
    },
    {
        "id": 43,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmalikhain\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Laging sumusunod"
            },
            {
                "letter": "B",
                "text": "Mapag-isip at may imahinasyon"
            },
            {
                "letter": "C",
                "text": "Tamad"
            },
            {
                "letter": "D",
                "text": "Walang talino"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Mapag-isip at may imahinasyon",
        "solution": "Malikhain = creative, imaginative."
    },
    {
        "id": 44,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmatimpi\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Mahinahon at may kontrol"
            },
            {
                "letter": "B",
                "text": "Magaspang"
            },
            {
                "letter": "C",
                "text": "Madali mapikon"
            },
            {
                "letter": "D",
                "text": "Walang disiplina"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Mahinahon at may kontrol",
        "solution": "Matimpi = self-controlled, composed."
    },
    {
        "id": 45,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmaalalahanin\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Palaging nag-iisip ng kabutihan ng iba"
            },
            {
                "letter": "B",
                "text": "Walang pakialam"
            },
            {
                "letter": "C",
                "text": "Mapanuri"
            },
            {
                "letter": "D",
                "text": "Mapagmataas"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Palaging nag-iisip ng kabutihan ng iba",
        "solution": "Maalalahanin = considerate, thoughtful."
    },
    {
        "id": 46,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmahiyain\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Palaban"
            },
            {
                "letter": "B",
                "text": "Tahimik at mahina ang loob"
            },
            {
                "letter": "C",
                "text": "Masigla"
            },
            {
                "letter": "D",
                "text": "Mapangahas"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Tahimik at mahina ang loob",
        "solution": "Mahiyain = shy, timid."
    },
    {
        "id": 47,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmapanlikha\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Mapag-imbento at malikhaing tao"
            },
            {
                "letter": "B",
                "text": "Sunud-sunuran"
            },
            {
                "letter": "C",
                "text": "Tamad"
            },
            {
                "letter": "D",
                "text": "Walang kakayahan"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Mapag-imbento at malikhaing tao",
        "solution": "Mapanlikha = inventive, creative."
    },
    {
        "id": 48,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmapanghikayat\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Nakakaimpluwensya sa iba"
            },
            {
                "letter": "B",
                "text": "Walang epekto"
            },
            {
                "letter": "C",
                "text": "Malupit"
            },
            {
                "letter": "D",
                "text": "Mapang-abuso"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Nakakaimpluwensya sa iba",
        "solution": "Mapanghikayat = persuasive, influential."
    },
    {
        "id": 49,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cpalasintahan\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Malupit"
            },
            {
                "letter": "B",
                "text": "Madaling mabigo sa tiwala"
            },
            {
                "letter": "C",
                "text": "Matatag at tapat"
            },
            {
                "letter": "D",
                "text": "Mapagmataas"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Madaling mabigo sa tiwala",
        "solution": "Palasintahan (repeated) = emotionally fragile, easily swayed."
    },
    {
        "id": 50,
        "topic": "FILIPINO VOCABULARY",
        "question": "Kahulugan ng \u201cmapagsapalaran\u201d:",
        "options": [
            {
                "letter": "A",
                "text": "Palaging nag-iingat"
            },
            {
                "letter": "B",
                "text": "Mahilig sa panganib o hamon"
            },
            {
                "letter": "C",
                "text": "Takot sa lahat"
            },
            {
                "letter": "D",
                "text": "Walang tiwala sa sarili"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Mahilig sa panganib o hamon",
        "solution": "Mapagsapalaran = adventurous, risk-taker."
    }
];


const verbalParaQuestions = [
    {
        "id": 1,
        "topic": "Paragraph Organization",
        "question": "A. The city council implemented new traffic rules.\nB. Commuters were initially confused.\nC. However, over time, people adapted and traffic improved.\nD. The government hoped to reduce congestion.",
        "options": [
            {
                "letter": "A",
                "text": "D-A-B-C"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "B-D-A-C"
            },
            {
                "letter": "D",
                "text": "D-B-A-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "D-A-B-C",
        "solution": "Government\u2019s goal \u2192 Action (rules) \u2192 Reaction (confusion) \u2192 Result (adaptation)"
    },
    {
        "id": 2,
        "topic": "Paragraph Organization",
        "question": "A. Students often struggle with time management.\nB. Many find balancing schoolwork and personal life difficult.\nC. Establishing a schedule can help alleviate stress.\nD. Prioritizing tasks is an essential skill.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-D-C"
            },
            {
                "letter": "C",
                "text": "A-B-D-C"
            },
            {
                "letter": "D",
                "text": "D-C-B-A"
            }
        ],
        "answer_letter": "C",
        "answer_text": "A-B-D-C",
        "solution": "Problem (students struggle) \u2192 Detail (balancing tasks) \u2192 Solution (prioritize) \u2192 Strategy (schedule)"
    },
    {
        "id": 3,
        "topic": "Paragraph Organization",
        "question": "A. Exercise has numerous health benefits.\nB. It improves cardiovascular health, mental well-being, and strength.\nC. People who exercise regularly tend to live longer.\nD. Many individuals neglect physical activity due to busy schedules.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-B-C"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "D-B-A-C"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-D-B-C",
        "solution": "Problem (neglect exercise) \u2192 General statement (benefits) \u2192 Detail (health improvements) \u2192 Outcome (longer life)"
    },
    {
        "id": 4,
        "topic": "Paragraph Organization",
        "question": "A. The solar system consists of eight planets.\nB. Mercury is closest to the Sun, followed by Venus and Earth.\nC. Gas giants like Jupiter and Saturn dominate the outer region.\nD. Astronomers study planetary motion to understand celestial mechanics.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "D-A-B-C"
            },
            {
                "letter": "C",
                "text": "B-A-C-D"
            },
            {
                "letter": "D",
                "text": "A-C-B-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Introduction (solar system) \u2192 Inner planets \u2192 Outer planets \u2192 Astronomers\u2019 study"
    },
    {
        "id": 5,
        "topic": "Paragraph Organization",
        "question": "A. Renewable energy sources are crucial for sustainability.\nB. Solar and wind power are becoming increasingly cost-effective.\nC. Fossil fuels contribute significantly to climate change.\nD. Governments worldwide are investing in cleaner alternatives.",
        "options": [
            {
                "letter": "A",
                "text": "C-A-B-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "C-B-A-D"
            },
            {
                "letter": "D",
                "text": "B-C-A-D"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-B-D",
        "solution": "Problem (fossil fuels) \u2192 Solution (renewable energy) \u2192 Progress (cost-effective) \u2192 Government action"
    },
    {
        "id": 6,
        "topic": "Paragraph Organization",
        "question": "A. Reading enhances vocabulary and comprehension skills.\nB. It also fosters imagination and critical thinking.\nC. Many people underestimate the importance of daily reading.\nD. Libraries provide access to a wide range of books.",
        "options": [
            {
                "letter": "A",
                "text": "A-C-B-D"
            },
            {
                "letter": "B",
                "text": "C-D-A-B"
            },
            {
                "letter": "C",
                "text": "A-B-C-D"
            },
            {
                "letter": "D",
                "text": "D-C-A-B"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-C-B-D",
        "solution": "Problem (underestimate reading) \u2192 Benefit (vocabulary & comprehension) \u2192 Additional benefit (imagination) \u2192 Support (libraries)"
    },
    {
        "id": 7,
        "topic": "Paragraph Organization",
        "question": "A. Technology has transformed modern education.\nB. Online learning platforms offer flexibility and accessibility.\nC. Students can now access a variety of resources from home.\nD. However, technology also introduces distractions and requires self-discipline.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "D-A-B-C"
            },
            {
                "letter": "D",
                "text": "B-A-D-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Main idea (technology transforms education) \u2192 Tools (online platforms) \u2192 Benefit (student access) \u2192 Challenge (self-discipline)"
    },
    {
        "id": 8,
        "topic": "Paragraph Organization",
        "question": "A. Climate change affects ecosystems worldwide.\nB. Rising temperatures lead to melting glaciers and sea-level rise.\nC. Species extinction is accelerating due to habitat loss.\nD. Immediate action is required to mitigate environmental damage.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "D-A-B-C"
            },
            {
                "letter": "C",
                "text": "B-A-C-D"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Problem (climate change) \u2192 Consequences (melting glaciers) \u2192 Effect (species extinction) \u2192 Call to action"
    },
    {
        "id": 9,
        "topic": "Paragraph Organization",
        "question": "A. Healthy eating involves balanced meals and proper nutrition.\nB. Excessive sugar and processed foods can harm long-term health.\nC. Fruits, vegetables, and whole grains provide essential nutrients.\nD. Dieticians emphasize moderation and variety.",
        "options": [
            {
                "letter": "A",
                "text": "A-C-B-D"
            },
            {
                "letter": "B",
                "text": "C-A-B-D"
            },
            {
                "letter": "C",
                "text": "D-C-A-B"
            },
            {
                "letter": "D",
                "text": "A-B-C-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-C-B-D",
        "solution": "Main idea (healthy eating) \u2192 What to include (fruits/vegetables) \u2192 What to avoid (sugar) \u2192 Advice (moderation)"
    },
    {
        "id": 10,
        "topic": "Paragraph Organization",
        "question": "A. Traveling abroad offers cultural exposure.\nB. Travelers learn new languages and customs.\nC. They develop adaptability and problem-solving skills.\nD. International experiences broaden personal perspectives.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "A-D-B-C"
            },
            {
                "letter": "D",
                "text": "B-A-C-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Offer (travel abroad) \u2192 Learning (languages/customs) \u2192 Skills (adaptability/problem-solving) \u2192 Broader perspective"
    },
    {
        "id": 11,
        "topic": "Paragraph Organization",
        "question": "A. Artificial intelligence (AI) is transforming industries.\nB. AI can automate repetitive tasks.\nC. It also enables data-driven decision-making.\nD. Businesses are investing heavily in AI technologies.",
        "options": [
            {
                "letter": "A",
                "text": "D-A-B-C"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "B-C-A-D"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-B-C-D",
        "solution": "Main idea (AI transforms industry) \u2192 Function (automates tasks) \u2192 Enables (data-driven decisions) \u2192 Result (business investment)"
    },
    {
        "id": 12,
        "topic": "Paragraph Organization",
        "question": "A. Social media has revolutionized communication.\nB. People can now connect across continents instantly.\nC. However, it also spreads misinformation quickly.\nD. Users must practice discernment when sharing content.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-D-C"
            },
            {
                "letter": "C",
                "text": "C-A-B-D"
            },
            {
                "letter": "D",
                "text": "D-C-B-A"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (social media) \u2192 Benefit (connect) \u2192 Risk (misinformation) \u2192 Solution (discernment)"
    },
    {
        "id": 13,
        "topic": "Paragraph Organization",
        "question": "A. Nutrition is a cornerstone of good health.\nB. Proteins, vitamins, and minerals are essential.\nC. Many people neglect proper nutrition.\nD. Health experts advise balanced meals.",
        "options": [
            {
                "letter": "A",
                "text": "C-A-B-D"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "D-A-B-C"
            },
            {
                "letter": "D",
                "text": "A-C-B-D"
            }
        ],
        "answer_letter": "D",
        "answer_text": "A-C-B-D",
        "solution": "Problem (neglect nutrition) \u2192 Main idea (nutrition essential) \u2192 Details (vitamins/minerals) \u2192 Expert advice (balanced meals)"
    },
    {
        "id": 14,
        "topic": "Paragraph Organization",
        "question": "A. Water conservation is vital.\nB. Many households waste water daily.\nC. Installing water-saving devices can help reduce consumption.\nD. Governments are promoting awareness campaigns.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-C-D"
            },
            {
                "letter": "C",
                "text": "D-A-B-C"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "B",
        "answer_text": "B-A-C-D",
        "solution": "Observation (waste) \u2192 Main idea (water conservation) \u2192 Solution (water-saving devices) \u2192 Support (government campaigns)"
    },
    {
        "id": 15,
        "topic": "Paragraph Organization",
        "question": "A. Space exploration inspires innovation.\nB. Satellites provide crucial data for weather and communication.\nC. Missions to other planets expand scientific knowledge.\nD. Despite high costs, space research benefits society.",
        "options": [
            {
                "letter": "A",
                "text": "A-C-B-D"
            },
            {
                "letter": "B",
                "text": "C-B-A-D"
            },
            {
                "letter": "C",
                "text": "A-B-C-D"
            },
            {
                "letter": "D",
                "text": "D-A-B-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-C-B-D",
        "solution": "Main idea (space inspires innovation) \u2192 Missions expand knowledge \u2192 Satellites provide data \u2192 Benefit to society"
    },
    {
        "id": 16,
        "topic": "Paragraph Organization",
        "question": "A. The internet is a powerful educational tool.\nB. Students can access online courses and tutorials.\nC. However, misinformation is widespread.\nD. Critical thinking is necessary to evaluate online content.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-B-D-C"
            },
            {
                "letter": "C",
                "text": "B-C-A-D"
            },
            {
                "letter": "D",
                "text": "D-C-B-A"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-B-D-C",
        "solution": "Main idea (internet education) \u2192 Example (online courses) \u2192 Skill (critical thinking) \u2192 Problem (misinformation)"
    },
    {
        "id": 17,
        "topic": "Paragraph Organization",
        "question": "A. Urbanization affects the environment.\nB. Construction and traffic increase pollution.\nC. Green spaces are shrinking in cities.\nD. Sustainable urban planning can mitigate these effects.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-D-C"
            },
            {
                "letter": "C",
                "text": "C-B-A-D"
            },
            {
                "letter": "D",
                "text": "D-C-B-A"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Main idea (urbanization) \u2192 Problem 1 (pollution) \u2192 Problem 2 (green spaces shrink) \u2192 Solution (sustainable planning)"
    },
    {
        "id": 18,
        "topic": "Paragraph Organization",
        "question": "A. Mental health is as important as physical health.\nB. Stress, anxiety, and depression are common issues.\nC. Support systems and therapy can help improve mental well-being.\nD. Raising awareness reduces stigma.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-C-D"
            },
            {
                "letter": "C",
                "text": "A-C-B-D"
            },
            {
                "letter": "D",
                "text": "D-A-B-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (mental health important) \u2192 Problem (stress/anxiety) \u2192 Solution (support systems) \u2192 Outcome (reduced stigma)"
    },
    {
        "id": 19,
        "topic": "Paragraph Organization",
        "question": "A. Renewable resources are essential for sustainability.\nB. Solar panels and wind turbines are widely used.\nC. Using renewable energy reduces carbon emissions.\nD. Governments encourage adoption through incentives.",
        "options": [
            {
                "letter": "A",
                "text": "A-C-B-D"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "C-B-A-D"
            },
            {
                "letter": "D",
                "text": "D-A-B-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-C-B-D",
        "solution": "Topic (renewable energy) \u2192 Benefit (reduce carbon) \u2192 Example (solar/wind) \u2192 Government action (incentives)"
    },
    {
        "id": 20,
        "topic": "Paragraph Organization",
        "question": "A. Volunteering fosters empathy and community spirit.\nB. Many organizations rely on volunteers for operations.\nC. Participants develop skills and meaningful experiences.\nD. Awareness campaigns encourage more people to volunteer.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-D-C"
            },
            {
                "letter": "C",
                "text": "D-A-B-C"
            },
            {
                "letter": "D",
                "text": "A-C-B-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (volunteering) \u2192 Importance (organizations) \u2192 Benefit (skills/experience) \u2192 Promotion (awareness)"
    },
    {
        "id": 21,
        "topic": "Paragraph Organization",
        "question": "A. Reading fiction stimulates creativity.\nB. Readers explore diverse perspectives.\nC. Stories teach moral lessons.\nD. Many underestimate the impact of literature.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-B-C"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "B-A-C-D"
            },
            {
                "letter": "D",
                "text": "C-D-B-A"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-D-B-C",
        "solution": "Observation (people underestimate literature) \u2192 Main idea (stimulates creativity) \u2192 Moral lesson \u2192 Explore perspectives"
    },
    {
        "id": 22,
        "topic": "Paragraph Organization",
        "question": "A. Cybersecurity is crucial in the digital age.\nB. Cyberattacks can compromise personal and corporate data.\nC. Strong passwords and multi-factor authentication reduce risks.\nD. Organizations must train employees on safe online practices.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-C-D"
            },
            {
                "letter": "C",
                "text": "C-D-A-B"
            },
            {
                "letter": "D",
                "text": "D-B-A-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (cybersecurity) \u2192 Problem (attacks) \u2192 Solution 1 (passwords/authentication) \u2192 Solution 2 (employee training)"
    },
    {
        "id": 23,
        "topic": "Paragraph Organization",
        "question": "A. Environmental education creates responsible citizens.\nB. Students learn about pollution, recycling, and conservation.\nC. School programs encourage participation in eco-friendly activities.\nD. A well-informed society can address ecological problems effectively.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-D-C"
            },
            {
                "letter": "C",
                "text": "C-A-B-D"
            },
            {
                "letter": "D",
                "text": "D-B-A-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (environmental education) \u2192 Specifics (pollution/recycling) \u2192 Program (school activities) \u2192 Result (well-informed society)"
    },
    {
        "id": 24,
        "topic": "Paragraph Organization",
        "question": "A. Exercise routines improve physical fitness.\nB. Cardiovascular and strength training are essential.\nC. Many beginners neglect warm-ups and proper technique.\nD. Trainers advise progressive and balanced workouts.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "C-A-B-D"
            },
            {
                "letter": "C",
                "text": "B-A-C-D"
            },
            {
                "letter": "D",
                "text": "D-C-B-A"
            }
        ],
        "answer_letter": "B",
        "answer_text": "C-A-B-D",
        "solution": "Problem (neglect warm-ups) \u2192 Topic (exercise improves fitness) \u2192 Details (cardio/strength) \u2192 Solution (progressive workouts)"
    },
    {
        "id": 25,
        "topic": "Paragraph Organization",
        "question": "A. Wildlife conservation protects endangered species.\nB. Habitat destruction is a major threat.\nC. Conservation programs include breeding and education efforts.\nD. The public is encouraged to participate in eco-friendly activities.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-C-A-D"
            },
            {
                "letter": "C",
                "text": "A-C-B-D"
            },
            {
                "letter": "D",
                "text": "D-A-B-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (wildlife conservation) \u2192 Threat (habitat destruction) \u2192 Program (breeding/education) \u2192 Public participation"
    },
    {
        "id": 26,
        "topic": "Paragraph Organization",
        "question": "A. Innovation drives economic growth.\nB. Startups introduce novel solutions to market problems.\nC. Research and development support technological advancements.\nD. Governments invest in innovation hubs and incentives.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "D-C-B-A"
            },
            {
                "letter": "C",
                "text": "B-A-D-C"
            },
            {
                "letter": "D",
                "text": "A-C-B-D"
            }
        ],
        "answer_letter": "D",
        "answer_text": "A-C-B-D",
        "solution": "Main idea (innovation drives growth) \u2192 R&D supports technology \u2192 Startups implement \u2192 Government invests"
    },
    {
        "id": 27,
        "topic": "Paragraph Organization",
        "question": "A. Public speaking skills are essential for leadership.\nB. Practice and preparation enhance confidence.\nC. Clear communication influences teams and audiences.\nD. Many shy individuals avoid speaking opportunities.",
        "options": [
            {
                "letter": "A",
                "text": "D-A-B-C"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "A-D-B-C"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "C",
        "answer_text": "A-D-B-C",
        "solution": "Problem (shy individuals avoid speaking) \u2192 Topic (public speaking essential) \u2192 Solution (practice) \u2192 Outcome (clear communication)"
    },
    {
        "id": 28,
        "topic": "Paragraph Organization",
        "question": "A. Space debris threatens satellites and astronauts.\nB. Debris results from old satellites and discarded rocket parts.\nC. International efforts aim to track and remove hazardous objects.\nD. Space agencies warn that debris management is critical for safety.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-C-D"
            },
            {
                "letter": "C",
                "text": "D-C-B-A"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "B",
        "answer_text": "B-A-C-D",
        "solution": "Cause (satellite debris) \u2192 Topic (space debris threats) \u2192 Solution (track/remove) \u2192 Warning (safety critical)"
    },
    {
        "id": 29,
        "topic": "Paragraph Organization",
        "question": "A. Nutrition affects academic performance.\nB. Balanced meals improve concentration and memory.\nC. Skipping meals or poor diet impairs learning.\nD. Schools promote healthy lunch programs.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "D-B-A-C"
            },
            {
                "letter": "D",
                "text": "B-C-A-D"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-B-D",
        "solution": "Topic (nutrition affects learning) \u2192 Problem (poor diet) \u2192 Solution (balanced meals) \u2192 School promotion"
    },
    {
        "id": 30,
        "topic": "Paragraph Organization",
        "question": "A. Disaster preparedness saves lives.\nB. Emergency kits and evacuation plans are vital.\nC. Many communities lack awareness of safety measures.\nD. Governments organize drills and educational campaigns.",
        "options": [
            {
                "letter": "A",
                "text": "C-A-B-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "D-C-A-B"
            },
            {
                "letter": "D",
                "text": "B-A-C-D"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-B-D",
        "solution": "Problem (lack of preparedness) \u2192 Importance (emergency kits) \u2192 Awareness (lack of knowledge) \u2192 Solution (government drills)"
    },
    {
        "id": 31,
        "topic": "Paragraph Organization",
        "question": "A. Literacy is fundamental to personal and societal development.\nB. Reading and writing skills open educational and career opportunities.\nC. Governments implement programs to increase literacy rates.\nD. Many adults remain functionally illiterate worldwide.",
        "options": [
            {
                "letter": "A",
                "text": "D-A-B-C"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "A-D-B-C"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "C",
        "answer_text": "A-D-B-C",
        "solution": "Topic (literacy important) \u2192 Problem (adult illiteracy) \u2192 Opportunity (reading/writing opens doors) \u2192 Solution (government programs)"
    },
    {
        "id": 32,
        "topic": "Paragraph Organization",
        "question": "A. Urban green spaces improve mental and physical health.\nB. Parks provide areas for recreation and relaxation.\nC. Cities face challenges in maintaining and expanding green zones.\nD. Citizens are encouraged to participate in greening initiatives.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "C-A-B-D"
            },
            {
                "letter": "C",
                "text": "D-C-B-A"
            },
            {
                "letter": "D",
                "text": "B-A-D-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (urban green spaces) \u2192 Benefit (recreation/relaxation) \u2192 Problem (city challenges) \u2192 Solution (citizen participation)"
    },
    {
        "id": 33,
        "topic": "Paragraph Organization",
        "question": "A. Renewable agriculture practices conserve resources.\nB. Crop rotation and organic farming maintain soil fertility.\nC. Overuse of pesticides harms ecosystems.\nD. Farmers are trained in sustainable methods.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "D-C-B-A"
            },
            {
                "letter": "D",
                "text": "B-A-D-C"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-B-D",
        "solution": "Topic (sustainable agriculture) \u2192 Problem (pesticide harm) \u2192 Solution (crop rotation/organic) \u2192 Support (training farmers)"
    },
    {
        "id": 34,
        "topic": "Paragraph Organization",
        "question": "A. Internet security protects personal information.\nB. Hackers exploit weak passwords and unsecured networks.\nC. Antivirus software and encryption are preventative measures.\nD. Awareness campaigns educate users on best practices.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "D-A-B-C"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (internet security) \u2192 Problem (hackers exploit) \u2192 Solution (antivirus/encryption) \u2192 Awareness campaigns"
    },
    {
        "id": 35,
        "topic": "Paragraph Organization",
        "question": "A. Renewable energy reduces dependence on fossil fuels.\nB. Solar, wind, and hydroelectric systems provide sustainable alternatives.\nC. Countries are transitioning to cleaner energy sources.\nD. Investment in green technologies supports environmental goals.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "C-A-B-D"
            },
            {
                "letter": "C",
                "text": "D-B-A-C"
            },
            {
                "letter": "D",
                "text": "B-C-A-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Topic (renewable energy) \u2192 Examples (solar/wind/hydro) \u2192 Transition (countries adopting) \u2192 Support (investments)\n\nPART II \u2013 FILIPINO PARAGRAPH ORGANIZATION (36\u201350)"
    },
    {
        "id": 36,
        "topic": "Paragraph Organization",
        "question": "A. Ang teknolohiya ay nakatulong sa edukasyon.\nB. Maraming estudyante ang gumagamit ng online na plataporma.\nC. Nagbibigay ito ng mas malawak na access sa kaalaman.\nD. Gayunpaman, kailangan ng disiplina upang hindi madistract.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "B-A-C-D"
            },
            {
                "letter": "D",
                "text": "C-B-A-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Paksa (teknolohiya sa edukasyon) \u2192 Halimbawa (online platforms) \u2192 Epekto (mas malawak na access) \u2192 Hamon (disiplina)"
    },
    {
        "id": 37,
        "topic": "Paragraph Organization",
        "question": "A. Mahalaga ang kalinisan sa pang-araw-araw na buhay.\nB. Nakatutulong ito upang maiwasan ang sakit.\nC. Maraming tao ang nakakalimot sa simpleng paghuhugas ng kamay.\nD. Ang tamang nutrisyon at ehersisyo ay bahagi rin ng kalusugan.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "C-A-B-D"
            },
            {
                "letter": "C",
                "text": "C-D-A-B"
            },
            {
                "letter": "D",
                "text": "B-C-A-D"
            }
        ],
        "answer_letter": "D",
        "answer_text": "B-C-A-D",
        "solution": "Problema (napapabayaan ang kalinisan) \u2192 Pangunahing ideya (mahalaga ang kalinisan) \u2192 Benepisyo (iwas sakit) \u2192 Suporta (nutrisyon at ehersisyo)"
    },
    {
        "id": 38,
        "topic": "Paragraph Organization",
        "question": "A. Ang pagbabasa ng libro ay nagpapalawak ng kaalaman.\nB. Nakakatulong ito sa pagbuo ng imahinasyon.\nC. Maraming kabataan ang mas pinipiling maglaro ng video games.\nD. Ang mga aklatan ay nagbibigay ng libre at malawak na access sa mga libro.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "C-D-A-B"
            },
            {
                "letter": "D",
                "text": "D-A-B-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Paksa (pagbabasa) \u2192 Benepisyo (kaalaman) \u2192 Benepisyo (imahinasyon) \u2192 Kontrast (video games) \u2192 Suporta (mga aklatan)"
    },
    {
        "id": 39,
        "topic": "Paragraph Organization",
        "question": "A. Ang kalikasan ay nagbibigay ng pagkain at tirahan.\nB. Ngunit, maraming lugar ang nasisira dahil sa polusyon.\nC. Kailangang pangalagaan ang ating kapaligiran.\nD. Ang mga puno at hayop ay bahagi ng balanseng ekosistema.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-B-C"
            },
            {
                "letter": "B",
                "text": "D-A-B-C"
            },
            {
                "letter": "C",
                "text": "A-B-D-C"
            },
            {
                "letter": "D",
                "text": "B-A-D-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-D-B-C",
        "solution": "Paksa (kalikasan nagbibigay ng pagkain at tirahan) \u2192 Detalye (puno at hayop) \u2192 Problema (polusyon) \u2192 Solusyon (pangangalaga sa kapaligiran)"
    },
    {
        "id": 40,
        "topic": "Paragraph Organization",
        "question": "A. Ang pag-eehersisyo ay nakatutulong sa katawan.\nB. Nakakapagpalakas ito ng puso at baga.\nC. Maraming tao ang hindi regular na nag-eehersisyo.\nD. Ang simpleng paglalakad araw-araw ay malaking tulong.",
        "options": [
            {
                "letter": "A",
                "text": "C-A-B-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "D-C-B-A"
            },
            {
                "letter": "D",
                "text": "B-A-D-C"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-B-D",
        "solution": "Paksa (ehersisyo) \u2192 Problema (hindi nag-eehersisyo) \u2192 Benepisyo (malusog na puso at baga) \u2192 Solusyon (paglalakad araw-araw)"
    },
    {
        "id": 41,
        "topic": "Paragraph Organization",
        "question": "A. Ang pagbabawal sa single-use plastics ay mahalaga.\nB. Maraming mamimili ang hindi sumusunod sa regulasyon.\nC. Ang gobyerno ay nagpapatupad ng monitoring at multa.\nD. Pagtaas ng kaalaman sa epekto ng plastik sa kalikasan ay kinakailangan.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-B-C"
            },
            {
                "letter": "B",
                "text": "D-A-B-C"
            },
            {
                "letter": "C",
                "text": "A-B-C-D"
            },
            {
                "letter": "D",
                "text": "B-A-D-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-D-B-C",
        "solution": "Paksa (pagbabawal sa single-use plastics) \u2192 Kamalayan \u2192 Problema (hindi pagsunod) \u2192 Pagpapatupad ng batas"
    },
    {
        "id": 42,
        "topic": "Paragraph Organization",
        "question": "A. Ang pag-aaral ng wika ay nagbubukas ng oportunidad.\nB. Praktis at immersion ay epektibo sa pagkatuto.\nC. Kabataan ay nahihirapan sa grammar.\nD. Maraming paraan upang matuto ng bagong wika.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-B-C"
            },
            {
                "letter": "B",
                "text": "A-C-D-B"
            },
            {
                "letter": "C",
                "text": "C-A-B-D"
            },
            {
                "letter": "D",
                "text": "D-A-B-C"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-D-B",
        "solution": "Paksa (pag-aaral ng wika) \u2192 Problema (grammar) \u2192 Solusyon (praktis at immersion) \u2192 Iba pang paraan"
    },
    {
        "id": 43,
        "topic": "Paragraph Organization",
        "question": "A. Pag-unlad ng teknolohiya ay mabilis.\nB. Industriya ay nag-aadapt sa bagong kagamitan.\nC. Pagsasanay sa empleyado ay mahalaga.\nD. Lahat ng sektor ay nakikinabang sa innovation.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "B-A-C-D"
            },
            {
                "letter": "C",
                "text": "C-B-A-D"
            },
            {
                "letter": "D",
                "text": "D-A-B-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Paksa (pag-unlad ng teknolohiya) \u2192 Pag-angkop ng industriya \u2192 Pagsasanay ng empleyado \u2192 Benepisyo sa lahat ng sektor"
    },
    {
        "id": 44,
        "topic": "Paragraph Organization",
        "question": "A. Pagkakaroon ng batas sa kaligtasan ay mahalaga.\nB. Mga imprastraktura ay dapat ligtas sa aksidente.\nC. Komunidad ay dapat edukado sa hazard prevention.\nD. Gobyerno ay nagpapatupad ng regulasyon.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-C-B"
            },
            {
                "letter": "B",
                "text": "D-A-C-B"
            },
            {
                "letter": "C",
                "text": "A-B-C-D"
            },
            {
                "letter": "D",
                "text": "B-D-A-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-D-C-B",
        "solution": "Paksa (mga batas pangkaligtasan) \u2192 Pagpapatupad ng gobyerno \u2192 Edukasyon ng komunidad \u2192 Ligtas na imprastraktura"
    },
    {
        "id": 45,
        "topic": "Paragraph Organization",
        "question": "A. Ekonomiya ng bansa ay nakadepende sa trabaho.\nB. Paglikha ng trabaho ay mahalaga sa development.\nC. Gobyerno ay nagsusulong ng employment programs.\nD. Kaalaman at skills ay kailangan para sa trabaho.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-B-C"
            },
            {
                "letter": "B",
                "text": "D-A-B-C"
            },
            {
                "letter": "C",
                "text": "C-A-B-D"
            },
            {
                "letter": "D",
                "text": "B-A-D-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-D-B-C",
        "solution": "Paksa (ekonomiya at trabaho) \u2192 Kaalaman at kasanayan \u2192 Paglikha ng trabaho \u2192 Programa ng gobyerno"
    },
    {
        "id": 46,
        "topic": "Paragraph Organization",
        "question": "A. Pag-iingat sa kalusugan ay mahalaga.\nB. Regular na check-up at pagkain ng tama ay nakatutulong.\nC. Maraming tao ang hindi seryoso sa preventive care.\nD. Health education programs ay nagbibigay gabay.",
        "options": [
            {
                "letter": "A",
                "text": "A-C-B-D"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "C-A-B-D"
            },
            {
                "letter": "D",
                "text": "B-D-A-C"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-C-B-D",
        "solution": "Paksa (kalusugan) \u2192 Problema (napapabayaan ang preventive care) \u2192 Solusyon (check-up at tamang pagkain) \u2192 Suporta (health education)"
    },
    {
        "id": 47,
        "topic": "Paragraph Organization",
        "question": "A. Pag-aaral ng kultura ay nagpapalawak ng pananaw.\nB. Kabataan ay natututo mula sa nakatatanda.\nC. Pagdiriwang ng pista ay nagpapakita ng kultura.\nD. Pagbabahagi ng kwento ay nag-uugnay sa mga henerasyon.",
        "options": [
            {
                "letter": "A",
                "text": "A-C-B-D"
            },
            {
                "letter": "B",
                "text": "A-B-C-D"
            },
            {
                "letter": "C",
                "text": "C-A-B-D"
            },
            {
                "letter": "D",
                "text": "D-C-B-A"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-C-B-D",
        "solution": "Paksa (kultura) \u2192 Halimbawa (pista) \u2192 Aral (natututo sa nakatatanda) \u2192 Bunga (ugnayan ng henerasyon)"
    },
    {
        "id": 48,
        "topic": "Paragraph Organization",
        "question": "A. Pagbasa ay nakakatulong sa kaalaman.\nB. Nagbibigay ito ng inspirasyon.\nC. Kabataan ay madalas nakatutok sa social media.\nD. Paaralan ay nagtataguyod ng literacy programs.",
        "options": [
            {
                "letter": "A",
                "text": "C-A-B-D"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "D-C-B-A"
            },
            {
                "letter": "D",
                "text": "B-C-A-D"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-B-D",
        "solution": "Problema (kabataang naaabala) \u2192 Paksa (pagbabasa) \u2192 Benepisyo (inspirasyon) \u2192 Suporta (literacy programs)"
    },
    {
        "id": 49,
        "topic": "Paragraph Organization",
        "question": "A. Pagpapatupad ng batas ay mahalaga.\nB. Maraming tao ang hindi sumusunod.\nC. Kampanya ng gobyerno ay nagpapaalala sa mamamayan.\nD. Disiplina ay nagdudulot ng kaayusan.",
        "options": [
            {
                "letter": "A",
                "text": "A-B-C-D"
            },
            {
                "letter": "B",
                "text": "D-A-B-C"
            },
            {
                "letter": "C",
                "text": "A-C-B-D"
            },
            {
                "letter": "D",
                "text": "B-C-A-D"
            }
        ],
        "answer_letter": "A",
        "answer_text": "A-B-C-D",
        "solution": "Paksa (kahalagahan ng batas) \u2192 Problema (hindi pagsunod) \u2192 Kampanya ng gobyerno \u2192 Resulta (kaayusan at disiplina)"
    },
    {
        "id": 50,
        "topic": "Paragraph Organization",
        "question": "A. Pag-aaral ng wika ay nagbubukas ng oportunidad.\nB. Maraming paraan upang matuto ng bagong wika.\nC. Kabataan ay nahihirapan sa grammar.\nD. Praktis at immersion ay epektibo sa pagkatuto.",
        "options": [
            {
                "letter": "A",
                "text": "A-D-B-C"
            },
            {
                "letter": "B",
                "text": "A-C-B-D"
            },
            {
                "letter": "C",
                "text": "C-A-B-D"
            },
            {
                "letter": "D",
                "text": "D-B-A-C"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A-C-B-D",
        "solution": "Paksa (pag-aaral ng wika) \u2192 Solusyon (praktis at immersion) \u2192 Problema (grammar) \u2192 Iba pang paraan ng pagkatuto."
    }
];


const verbalReadingQuestions = [
    {
        "id": 1,
        "topic": "Reading Comprehension",
        "question": "**Passage 1:**\nThe rapid expansion of urban areas has created unprecedented environmental challenges. Cities struggle with air pollution, waste management, and water scarcity. Technological solutions, such as smart grids and renewable energy, offer potential mitigation, yet financial and political barriers often impede implementation. Urban planners must balance sustainability with socio-economic realities to ensure long-term resilience.\n\n**Question:**\nMain idea:",
        "options": [
            {
                "letter": "A",
                "text": "Urban technology solves all city problems"
            },
            {
                "letter": "B",
                "text": "Cities face environmental challenges requiring integrated planning"
            },
            {
                "letter": "C",
                "text": "Political barriers prevent all urban development"
            },
            {
                "letter": "D",
                "text": "Urban areas should focus solely on economic growth"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Cities face environmental challenges requiring integrated planning.",
        "solution": "Cities face environmental challenges requiring integrated planning."
    },
    {
        "id": 2,
        "topic": "Reading Comprehension",
        "question": "**Passage 1:**\nThe rapid expansion of urban areas has created unprecedented environmental challenges. Cities struggle with air pollution, waste management, and water scarcity. Technological solutions, such as smart grids and renewable energy, offer potential mitigation, yet financial and political barriers often impede implementation. Urban planners must balance sustainability with socio-economic realities to ensure long-term resilience.\n\n**Question:**\nUrban planning is important because:",
        "options": [
            {
                "letter": "A",
                "text": "It increases population density"
            },
            {
                "letter": "B",
                "text": "It integrates sustainability with socio-economic realities"
            },
            {
                "letter": "C",
                "text": "It builds more skyscrapers"
            },
            {
                "letter": "D",
                "text": "It reduces financial barriers automatically"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Urban planning integrates sustainability with socio-economic realities.",
        "solution": "Urban planning integrates sustainability with socio-economic realities."
    },
    {
        "id": 3,
        "topic": "Reading Comprehension",
        "question": "**Passage 1:**\nThe rapid expansion of urban areas has created unprecedented environmental challenges. Cities struggle with air pollution, waste management, and water scarcity. Technological solutions, such as smart grids and renewable energy, offer potential mitigation, yet financial and political barriers often impede implementation. Urban planners must balance sustainability with socio-economic realities to ensure long-term resilience.\n\n**Question:**\nWhat can be inferred about technological solutions?",
        "options": [
            {
                "letter": "A",
                "text": "Easy to implement in all cities"
            },
            {
                "letter": "B",
                "text": "Unnecessary in urban areas"
            },
            {
                "letter": "C",
                "text": "Promising but face financial and political challenges"
            },
            {
                "letter": "D",
                "text": "Solve all urban environmental problems"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Technology is promising but faces financial and political barriers.",
        "solution": "Technology is promising but faces financial and political barriers."
    },
    {
        "id": 4,
        "topic": "Reading Comprehension",
        "question": "**Passage 2:**\nBiodiversity underpins resilient ecosystems. Species loss threatens food security, water quality, and climate regulation. Effective conservation requires attention to both individual species and the habitats they occupy. Community engagement further enhances these efforts.\n\n**Question:**\nBiodiversity is essential for:",
        "options": [
            {
                "letter": "A",
                "text": "Industrial expansion"
            },
            {
                "letter": "B",
                "text": "Ecosystem resilience and human well-being"
            },
            {
                "letter": "C",
                "text": "Political power"
            },
            {
                "letter": "D",
                "text": "Urban planning"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Biodiversity supports ecosystem resilience and human well-being.",
        "solution": "Biodiversity supports ecosystem resilience and human well-being."
    },
    {
        "id": 5,
        "topic": "Reading Comprehension",
        "question": "**Passage 2:**\nBiodiversity underpins resilient ecosystems. Species loss threatens food security, water quality, and climate regulation. Effective conservation requires attention to both individual species and the habitats they occupy. Community engagement further enhances these efforts.\n\n**Question:**\nWhich strategy is NOT mentioned for conservation?",
        "options": [
            {
                "letter": "A",
                "text": "Preserving habitats"
            },
            {
                "letter": "B",
                "text": "Protecting individual species"
            },
            {
                "letter": "C",
                "text": "Engaging communities"
            },
            {
                "letter": "D",
                "text": "Building artificial cities"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Building artificial cities is not mentioned as a conservation strategy.",
        "solution": "Building artificial cities is not mentioned as a conservation strategy."
    },
    {
        "id": 6,
        "topic": "Reading Comprehension",
        "question": "**Passage 2:**\nBiodiversity underpins resilient ecosystems. Species loss threatens food security, water quality, and climate regulation. Effective conservation requires attention to both individual species and the habitats they occupy. Community engagement further enhances these efforts.\n\n**Question:**\nAuthor\u2019s purpose:",
        "options": [
            {
                "letter": "A",
                "text": "Criticize urban planning"
            },
            {
                "letter": "B",
                "text": "Inform about biodiversity and conservation"
            },
            {
                "letter": "C",
                "text": "Argue against human settlements"
            },
            {
                "letter": "D",
                "text": "Promote industrialization"
            }
        ],
        "answer_letter": "B",
        "answer_text": "The passage informs about biodiversity and conservation.",
        "solution": "The passage informs about biodiversity and conservation."
    },
    {
        "id": 7,
        "topic": "Reading Comprehension",
        "question": "**Passage 3:**\n\u201cChronicles of Time\u201d uses multiple perspectives to explore psychological complexity. Non-linear narrative juxtaposes past and present, revealing how memory shapes identity. Readers must actively construct meaning, reflecting the interpretive nature of storytelling.\n\n**Question:**\nWhich literary technique is emphasized?",
        "options": [
            {
                "letter": "A",
                "text": "Linear narrative"
            },
            {
                "letter": "B",
                "text": "Multiple perspectives and non-linear narrative"
            },
            {
                "letter": "C",
                "text": "Flash fiction"
            },
            {
                "letter": "D",
                "text": "Omniscient narration only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Multiple perspectives and non-linear narrative are emphasized.",
        "solution": "Multiple perspectives and non-linear narrative are emphasized."
    },
    {
        "id": 8,
        "topic": "Reading Comprehension",
        "question": "**Passage 3:**\n\u201cChronicles of Time\u201d uses multiple perspectives to explore psychological complexity. Non-linear narrative juxtaposes past and present, revealing how memory shapes identity. Readers must actively construct meaning, reflecting the interpretive nature of storytelling.\n\n**Question:**\nReader\u2019s role:",
        "options": [
            {
                "letter": "A",
                "text": "Passive consumer of story"
            },
            {
                "letter": "B",
                "text": "Actively interpret and construct meaning"
            },
            {
                "letter": "C",
                "text": "Ignore character psychology"
            },
            {
                "letter": "D",
                "text": "Follow timeline only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Readers actively interpret and construct meaning.",
        "solution": "Readers actively interpret and construct meaning."
    },
    {
        "id": 9,
        "topic": "Reading Comprehension",
        "question": "**Passage 3:**\n\u201cChronicles of Time\u201d uses multiple perspectives to explore psychological complexity. Non-linear narrative juxtaposes past and present, revealing how memory shapes identity. Readers must actively construct meaning, reflecting the interpretive nature of storytelling.\n\n**Question:**\nThe passage suggests memory:",
        "options": [
            {
                "letter": "A",
                "text": "Irrelevant"
            },
            {
                "letter": "B",
                "text": "Shapes character identity"
            },
            {
                "letter": "C",
                "text": "Entirely fictional"
            },
            {
                "letter": "D",
                "text": "Appears only in dialogue"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Memory shapes identity.",
        "solution": "Memory shapes identity."
    },
    {
        "id": 10,
        "topic": "Reading Comprehension",
        "question": "**Passage 4:**\nClimate models predict increasing extreme weather events, disproportionately affecting populations lacking infrastructure and adaptive capacity. Policymakers must ensure equity in mitigation and adaptation strategies.\n\n**Question:**\nMain idea:",
        "options": [
            {
                "letter": "A",
                "text": "Extreme weather affects everyone equally"
            },
            {
                "letter": "B",
                "text": "Vulnerable populations are disproportionately impacted; equitable policies needed"
            },
            {
                "letter": "C",
                "text": "Climate models are unreliable"
            },
            {
                "letter": "D",
                "text": "Focus only on technological solutions"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Vulnerable populations are disproportionately affected.",
        "solution": "Vulnerable populations are disproportionately affected."
    },
    {
        "id": 11,
        "topic": "Reading Comprehension",
        "question": "**Passage 4:**\nClimate models predict increasing extreme weather events, disproportionately affecting populations lacking infrastructure and adaptive capacity. Policymakers must ensure equity in mitigation and adaptation strategies.\n\n**Question:**\n\u201cAdaptive capacity\u201d means:",
        "options": [
            {
                "letter": "A",
                "text": "Ability to adjust to changing conditions"
            },
            {
                "letter": "B",
                "text": "Physical strength"
            },
            {
                "letter": "C",
                "text": "Economic wealth only"
            },
            {
                "letter": "D",
                "text": "Political influence"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Adaptive capacity means ability to adjust to changing conditions.",
        "solution": "Adaptive capacity means ability to adjust to changing conditions."
    },
    {
        "id": 12,
        "topic": "Reading Comprehension",
        "question": "**Passage 4:**\nClimate models predict increasing extreme weather events, disproportionately affecting populations lacking infrastructure and adaptive capacity. Policymakers must ensure equity in mitigation and adaptation strategies.\n\n**Question:**\nPolicymakers should:",
        "options": [
            {
                "letter": "A",
                "text": "Ignore social factors"
            },
            {
                "letter": "B",
                "text": "Focus on equitable adaptation and mitigation"
            },
            {
                "letter": "C",
                "text": "Invest only in high-tech solutions"
            },
            {
                "letter": "D",
                "text": "Relocate all populations"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Policymakers should focus on equitable adaptation and mitigation.",
        "solution": "Policymakers should focus on equitable adaptation and mitigation."
    },
    {
        "id": 13,
        "topic": "Reading Comprehension",
        "question": "**Passage 5:**\nArtificial intelligence presents opportunities and ethical challenges. While AI can improve efficiency and decision-making, concerns include bias, accountability, and privacy. Responsible AI requires transparency, oversight, and stakeholder engagement.\n\n**Question:**\nPrimary concern?",
        "options": [
            {
                "letter": "A",
                "text": "Cost of AI"
            },
            {
                "letter": "B",
                "text": "Ethical implications"
            },
            {
                "letter": "C",
                "text": "AI replacing humans"
            },
            {
                "letter": "D",
                "text": "Slowing decision-making"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Ethical issues are the primary concern.",
        "solution": "Ethical issues are the primary concern."
    },
    {
        "id": 14,
        "topic": "Reading Comprehension",
        "question": "**Passage 5:**\nArtificial intelligence presents opportunities and ethical challenges. While AI can improve efficiency and decision-making, concerns include bias, accountability, and privacy. Responsible AI requires transparency, oversight, and stakeholder engagement.\n\n**Question:**\n\u201cTransparency\u201d means:",
        "options": [
            {
                "letter": "A",
                "text": "Systems are understandable and open to scrutiny"
            },
            {
                "letter": "B",
                "text": "Physical clarity"
            },
            {
                "letter": "C",
                "text": "Computation speed"
            },
            {
                "letter": "D",
                "text": "Algorithm secrecy"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Transparency means being understandable and open to scrutiny.",
        "solution": "Transparency means being understandable and open to scrutiny."
    },
    {
        "id": 15,
        "topic": "Reading Comprehension",
        "question": "**Passage 5:**\nArtificial intelligence presents opportunities and ethical challenges. While AI can improve efficiency and decision-making, concerns include bias, accountability, and privacy. Responsible AI requires transparency, oversight, and stakeholder engagement.\n\n**Question:**\nRecommended approach for responsible AI?",
        "options": [
            {
                "letter": "A",
                "text": "Ignore stakeholders"
            },
            {
                "letter": "B",
                "text": "Ensure oversight, transparency, and stakeholder involvement"
            },
            {
                "letter": "C",
                "text": "Focus solely on efficiency"
            },
            {
                "letter": "D",
                "text": "Limit AI to research"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Responsible AI requires oversight, transparency, and stakeholder involvement.",
        "solution": "Responsible AI requires oversight, transparency, and stakeholder involvement."
    },
    {
        "id": 16,
        "topic": "Reading Comprehension",
        "question": "**Passage 6:**\nUrban transportation affects air quality and public health. Promoting public transport, cycling, and walking reduces emissions. Behavioral change campaigns must accompany infrastructure improvements for meaningful impact.\n\n**Question:**\nMain idea:",
        "options": [
            {
                "letter": "A",
                "text": "Urban transportation affects health and environment"
            },
            {
                "letter": "B",
                "text": "Cycling is the only solution"
            },
            {
                "letter": "C",
                "text": "Air quality is unaffected by transport"
            },
            {
                "letter": "D",
                "text": "Only infrastructure matters"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Transportation affects public health and the environment.",
        "solution": "Transportation affects public health and the environment."
    },
    {
        "id": 17,
        "topic": "Reading Comprehension",
        "question": "**Passage 6:**\nUrban transportation affects air quality and public health. Promoting public transport, cycling, and walking reduces emissions. Behavioral change campaigns must accompany infrastructure improvements for meaningful impact.\n\n**Question:**\n\u201cBehavioral change campaigns\u201d refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Encouraging citizens to adopt sustainable habits"
            },
            {
                "letter": "B",
                "text": "Building more roads"
            },
            {
                "letter": "C",
                "text": "Ignoring public behavior"
            },
            {
                "letter": "D",
                "text": "Expanding industrial transport"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Behavioral change campaigns encourage sustainable habits.",
        "solution": "Behavioral change campaigns encourage sustainable habits."
    },
    {
        "id": 18,
        "topic": "Reading Comprehension",
        "question": "**Passage 6:**\nUrban transportation affects air quality and public health. Promoting public transport, cycling, and walking reduces emissions. Behavioral change campaigns must accompany infrastructure improvements for meaningful impact.\n\n**Question:**\nWhat is implied about infrastructure improvements?",
        "options": [
            {
                "letter": "A",
                "text": "Alone, they are insufficient without behavioral change"
            },
            {
                "letter": "B",
                "text": "Solve all pollution issues by themselves"
            },
            {
                "letter": "C",
                "text": "Irrelevant to air quality"
            },
            {
                "letter": "D",
                "text": "Focus on private cars only"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Infrastructure alone is insufficient without behavior change.",
        "solution": "Infrastructure alone is insufficient without behavior change."
    },
    {
        "id": 19,
        "topic": "Reading Comprehension",
        "question": "**Passage 7:**\nOnline learning has revolutionized education by expanding access. However, it poses challenges: students may lack motivation, struggle with self-discipline, and face digital inequities.\n\n**Question:**\nMain idea:",
        "options": [
            {
                "letter": "A",
                "text": "Online learning has only benefits"
            },
            {
                "letter": "B",
                "text": "Online learning expands access but has challenges"
            },
            {
                "letter": "C",
                "text": "Traditional classrooms are obsolete"
            },
            {
                "letter": "D",
                "text": "Internet access is universal"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Online learning expands access but has challenges.",
        "solution": "Online learning expands access but has challenges."
    },
    {
        "id": 20,
        "topic": "Reading Comprehension",
        "question": "**Passage 7:**\nOnline learning has revolutionized education by expanding access. However, it poses challenges: students may lack motivation, struggle with self-discipline, and face digital inequities.\n\n**Question:**\n\u201cDigital inequities\u201d refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Unequal access to technology and internet"
            },
            {
                "letter": "B",
                "text": "Grades in school"
            },
            {
                "letter": "C",
                "text": "Physical education"
            },
            {
                "letter": "D",
                "text": "Curriculum differences"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Digital inequities mean unequal access to technology and internet.",
        "solution": "Digital inequities mean unequal access to technology and internet."
    },
    {
        "id": 21,
        "topic": "Reading Comprehension",
        "question": "**Passage 7:**\nOnline learning has revolutionized education by expanding access. However, it poses challenges: students may lack motivation, struggle with self-discipline, and face digital inequities.\n\n**Question:**\nWhich is a challenge mentioned?",
        "options": [
            {
                "letter": "A",
                "text": "Lack of motivation"
            },
            {
                "letter": "B",
                "text": "Excessive free time"
            },
            {
                "letter": "C",
                "text": "Overqualified teachers"
            },
            {
                "letter": "D",
                "text": "Too many textbooks"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Lack of motivation is a challenge mentioned.",
        "solution": "Lack of motivation is a challenge mentioned."
    },
    {
        "id": 22,
        "topic": "Reading Comprehension",
        "question": "**Passage 8:**\nRenewable energy adoption reduces greenhouse gas emissions and fosters energy security. Transitioning requires investment, policy support, and public awareness.\n\n**Question:**\nMain idea:",
        "options": [
            {
                "letter": "A",
                "text": "Renewable energy adoption reduces emissions but requires support"
            },
            {
                "letter": "B",
                "text": "Fossil fuels are better"
            },
            {
                "letter": "C",
                "text": "Public awareness is irrelevant"
            },
            {
                "letter": "D",
                "text": "Energy security is unimportant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Renewable energy reduces emissions but needs support.",
        "solution": "Renewable energy reduces emissions but needs support."
    },
    {
        "id": 23,
        "topic": "Reading Comprehension",
        "question": "**Passage 8:**\nRenewable energy adoption reduces greenhouse gas emissions and fosters energy security. Transitioning requires investment, policy support, and public awareness.\n\n**Question:**\nWhat is required for effective transition?",
        "options": [
            {
                "letter": "A",
                "text": "Investment, policies, public awareness"
            },
            {
                "letter": "B",
                "text": "Ignoring policy"
            },
            {
                "letter": "C",
                "text": "Random deployment"
            },
            {
                "letter": "D",
                "text": "No investment"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Investment, policy support, and awareness are required.",
        "solution": "Investment, policy support, and awareness are required."
    },
    {
        "id": 24,
        "topic": "Reading Comprehension",
        "question": "**Passage 8:**\nRenewable energy adoption reduces greenhouse gas emissions and fosters energy security. Transitioning requires investment, policy support, and public awareness.\n\n**Question:**\n\u201cEnergy security\u201d implies:",
        "options": [
            {
                "letter": "A",
                "text": "Stable, reliable energy supply"
            },
            {
                "letter": "B",
                "text": "Physical locks"
            },
            {
                "letter": "C",
                "text": "Economic wealth only"
            },
            {
                "letter": "D",
                "text": "Government secrecy"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Energy security means stable and reliable energy supply.",
        "solution": "Energy security means stable and reliable energy supply."
    },
    {
        "id": 25,
        "topic": "Reading Comprehension",
        "question": "**Passage 9:**\nEffective communication requires clarity, active listening, and empathy. Misunderstandings often arise from assumptions, cultural differences, or lack of feedback. Training and reflective practices improve communication skills.\n\n**Question:**\nMain idea:",
        "options": [
            {
                "letter": "A",
                "text": "Communication requires clarity, listening, and empathy"
            },
            {
                "letter": "B",
                "text": "Misunderstandings cannot be avoided"
            },
            {
                "letter": "C",
                "text": "Communication is irrelevant"
            },
            {
                "letter": "D",
                "text": "Technology solves all communication issues"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Effective communication requires clarity, listening, and empathy.",
        "solution": "Effective communication requires clarity, listening, and empathy."
    },
    {
        "id": 26,
        "topic": "Reading Comprehension",
        "question": "**Passage 9:**\nEffective communication requires clarity, active listening, and empathy. Misunderstandings often arise from assumptions, cultural differences, or lack of feedback. Training and reflective practices improve communication skills.\n\n**Question:**\n\u201cAssumptions\u201d here means:",
        "options": [
            {
                "letter": "A",
                "text": "Preconceived notions that may hinder understanding"
            },
            {
                "letter": "B",
                "text": "Financial estimates"
            },
            {
                "letter": "C",
                "text": "Physical posture"
            },
            {
                "letter": "D",
                "text": "Cultural celebrations"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Assumptions are preconceived notions.",
        "solution": "Assumptions are preconceived notions."
    },
    {
        "id": 27,
        "topic": "Reading Comprehension",
        "question": "**Passage 9:**\nEffective communication requires clarity, active listening, and empathy. Misunderstandings often arise from assumptions, cultural differences, or lack of feedback. Training and reflective practices improve communication skills.\n\n**Question:**\nWhat improves communication skills?",
        "options": [
            {
                "letter": "A",
                "text": "Training and reflection"
            },
            {
                "letter": "B",
                "text": "Ignoring feedback"
            },
            {
                "letter": "C",
                "text": "Speaking loudly"
            },
            {
                "letter": "D",
                "text": "Technology alone"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Training and reflection improve communication.",
        "solution": "Training and reflection improve communication."
    },
    {
        "id": 28,
        "topic": "Reading Comprehension",
        "question": "**Passage 10:**\nWater scarcity affects agriculture, health, and industry. Conservation requires infrastructure, behavioral change, and equitable distribution. Policy and community engagement are key.\n\n**Question:**\nMain idea:",
        "options": [
            {
                "letter": "A",
                "text": "Water scarcity impacts multiple sectors; solutions require infrastructure and behavioral change"
            },
            {
                "letter": "B",
                "text": "Water scarcity is exaggerated"
            },
            {
                "letter": "C",
                "text": "Only industry suffers"
            },
            {
                "letter": "D",
                "text": "No solutions are possible"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Water scarcity affects many sectors and needs multiple solutions.",
        "solution": "Water scarcity affects many sectors and needs multiple solutions."
    },
    {
        "id": 29,
        "topic": "Reading Comprehension",
        "question": "**Passage 10:**\nWater scarcity affects agriculture, health, and industry. Conservation requires infrastructure, behavioral change, and equitable distribution. Policy and community engagement are key.\n\n**Question:**\n\u201cEquitable distribution\u201d means:",
        "options": [
            {
                "letter": "A",
                "text": "Fair access for all users"
            },
            {
                "letter": "B",
                "text": "Physical distribution of water pipes only"
            },
            {
                "letter": "C",
                "text": "Government only uses water"
            },
            {
                "letter": "D",
                "text": "Ignoring public needs"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Equitable distribution means fair access for all.",
        "solution": "Equitable distribution means fair access for all."
    },
    {
        "id": 30,
        "topic": "Reading Comprehension",
        "question": "**Passage 10:**\nWater scarcity affects agriculture, health, and industry. Conservation requires infrastructure, behavioral change, and equitable distribution. Policy and community engagement are key.\n\n**Question:**\nPolicy and community engagement are:",
        "options": [
            {
                "letter": "A",
                "text": "Key to effective water conservation"
            },
            {
                "letter": "B",
                "text": "Unnecessary"
            },
            {
                "letter": "C",
                "text": "Only theoretical"
            },
            {
                "letter": "D",
                "text": "Optional\n\nPart II \u2013 Filipino Reading Comprehension (31\u201335)"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Policy and community engagement are essential.",
        "solution": "Policy and community engagement are essential."
    },
    {
        "id": 31,
        "topic": "Reading Comprehension",
        "question": "**Part II Filipino Reading Comprehensions (31-35)**\n**Passage 12:**\nAng pagbabago ng klima ay nagdudulot ng matinding epekto sa kalikasan at lipunan. Ang pagbaha, tagtuyot, at pag-init ng mundo ay nakaaapekto sa agrikultura, kalusugan, at kabuhayan. Kinakailangan ng agarang aksyon mula sa pamahalaan at mamamayan upang mapagaan ang epekto nito.\n\n**Question:**\nPangunahing ideya?",
        "options": [
            {
                "letter": "A",
                "text": "Pagbabago ng klima may malawak na epekto, nangangailangan ng aksyon"
            },
            {
                "letter": "B",
                "text": "Tagtuyot lamang ang problema"
            },
            {
                "letter": "C",
                "text": "Walang epekto sa lipunan"
            },
            {
                "letter": "D",
                "text": "Dapat itigil ang agrikultura"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Climate change has broad impacts and requires action.",
        "solution": "Climate change has broad impacts and requires action."
    },
    {
        "id": 32,
        "topic": "Reading Comprehension",
        "question": "**Part II Filipino Reading Comprehensions (31-35)**\n**Passage 12:**\nAng pagbabago ng klima ay nagdudulot ng matinding epekto sa kalikasan at lipunan. Ang pagbaha, tagtuyot, at pag-init ng mundo ay nakaaapekto sa agrikultura, kalusugan, at kabuhayan. Kinakailangan ng agarang aksyon mula sa pamahalaan at mamamayan upang mapagaan ang epekto nito.\n\n**Question:**\nIpinapahiwatig ng \u201cagarang aksyon\u201d?",
        "options": [
            {
                "letter": "A",
                "text": "Maghintay ng tamang panahon"
            },
            {
                "letter": "B",
                "text": "Magsagawa ng mabilis na hakbang upang mapagaan ang epekto"
            },
            {
                "letter": "C",
                "text": "Walang aksyon"
            },
            {
                "letter": "D",
                "text": "Pagtatayo ng mga gusali lamang"
            }
        ],
        "answer_letter": "B",
        "answer_text": "\u201cAgarang aksyon\u201d means taking immediate steps.",
        "solution": "\u201cAgarang aksyon\u201d means taking immediate steps."
    },
    {
        "id": 33,
        "topic": "Reading Comprehension",
        "question": "**Part II Filipino Reading Comprehensions (31-35)**\n**Passage 13:**\nAng teknolohiya sa edukasyon ay nagbibigay ng mas malawak na oportunidad sa pagkatuto. Sa pamamagitan ng online platforms, mas maraming estudyante ang nakaka-access sa kaalaman. Gayunpaman, nangangailangan ito ng disiplina at tamang gabay mula sa guro.\n\n**Question:**\nPangunahin layunin ng talata?",
        "options": [
            {
                "letter": "A",
                "text": "Ipakita ang kahalagahan ng edukasyon at teknolohiya"
            },
            {
                "letter": "B",
                "text": "Sugpuin paggamit ng teknolohiya"
            },
            {
                "letter": "C",
                "text": "Magreklamo tungkol sa guro"
            },
            {
                "letter": "D",
                "text": "Talakayin problema sa disiplina lamang"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Technology expands educational opportunities.",
        "solution": "Technology expands educational opportunities."
    },
    {
        "id": 34,
        "topic": "Reading Comprehension",
        "question": "**Part II Filipino Reading Comprehensions (31-35)**\n**Passage 13:**\nAng teknolohiya sa edukasyon ay nagbibigay ng mas malawak na oportunidad sa pagkatuto. Sa pamamagitan ng online platforms, mas maraming estudyante ang nakaka-access sa kaalaman. Gayunpaman, nangangailangan ito ng disiplina at tamang gabay mula sa guro.\n\n**Question:**\nAno ang ipinapakita ng \u201cmas maraming estudyante ang nakaka-access sa kaalaman\u201d?",
        "options": [
            {
                "letter": "A",
                "text": "Limitadong kaalaman"
            },
            {
                "letter": "B",
                "text": "Pagtaas ng access sa impormasyon"
            },
            {
                "letter": "C",
                "text": "Kaalaman nababawasan"
            },
            {
                "letter": "D",
                "text": "Walang koneksyon sa edukasyon"
            }
        ],
        "answer_letter": "B",
        "answer_text": "More students gain access to information.",
        "solution": "More students gain access to information."
    },
    {
        "id": 35,
        "topic": "Reading Comprehension",
        "question": "**Part II Filipino Reading Comprehensions (31-35)**\n**Passage 14:**\nAng pag-eehersisyo ay nakakatulong sa kalusugan. Maraming tao ang hindi regular na nag-eehersisyo, kaya mahalaga ang simpleng paglalakad at tamang diyeta upang mapanatili ang kalusugan.\n\n**Question:**\nPangunahing ideya?",
        "options": [
            {
                "letter": "A",
                "text": "Exercise helps health"
            },
            {
                "letter": "B",
                "text": "Exercise is unnecessary"
            },
            {
                "letter": "C",
                "text": "Only athletes need exercise"
            },
            {
                "letter": "D",
                "text": "Diet is irrelevant"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Exercise helps maintain health.",
        "solution": "Exercise helps maintain health."
    }
];


const genInfoConstQuestions = [
    {
        "id": 1,
        "topic": "Philippine Constitution",
        "question": "Elective or appointive public officials or employees cannot accept any present, compensation, office or title from any foreign government without the consent of:",
        "options": [
            {
                "letter": "A",
                "text": "The President"
            },
            {
                "letter": "B",
                "text": "The Chief Justice"
            },
            {
                "letter": "C",
                "text": "The Ombudsman"
            },
            {
                "letter": "D",
                "text": "The Agency Head"
            },
            {
                "letter": "E",
                "text": "Congress"
            }
        ],
        "answer_letter": "E",
        "answer_text": "Congress",
        "solution": "According to the Philippine Constitution (Article IX, Section 7 of the 1987 Constitution), public officials and employees cannot accept gifts, titles, or compensation from any foreign government without the consent of Congress."
    },
    {
        "id": 2,
        "topic": "Philippine Constitution",
        "question": "Which of the following rights ensure the well-being of the individual and foster preservation, enrichment and dynamic evolution of national culture based on the principle of unity in diversity in a climate of free artistic and intellectual expression?",
        "options": [
            {
                "letter": "A",
                "text": "Political rights"
            },
            {
                "letter": "B",
                "text": "Inherent rights"
            },
            {
                "letter": "C",
                "text": "Civil rights"
            },
            {
                "letter": "D",
                "text": "Cultural rights"
            },
            {
                "letter": "E",
                "text": "Economic and Social rights"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Cultural rights",
        "solution": "Cultural rights pertain to the right of individuals and communities to enjoy their culture, use their language, and express themselves artistically and intellectually, while contributing to national heritage and identity."
    },
    {
        "id": 3,
        "topic": "Philippine Constitution",
        "question": "Right that guarantees similar treatment to all persons similarly situated and precludes arbitrary or unjust discrimination to secure and safeguard such right is called the ________.",
        "options": [
            {
                "letter": "A",
                "text": "Right against double jeopardy"
            },
            {
                "letter": "B",
                "text": "Right to just compensation"
            },
            {
                "letter": "C",
                "text": "Right to equal protection of the law"
            },
            {
                "letter": "D",
                "text": "Right to due process of law"
            },
            {
                "letter": "E",
                "text": "Right to profess one's faith or religion"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Right to equal protection of the law",
        "solution": "This right ensures that laws apply equally to all people who are in similar circumstances, preventing discriminatory treatment and upholding fairness under the law."
    },
    {
        "id": 4,
        "topic": "Philippine Constitution",
        "question": "The right to privacy of a person is defined as one's right to ________.",
        "options": [
            {
                "letter": "A",
                "text": "Go where one pleases"
            },
            {
                "letter": "B",
                "text": "Believe whatever one wishes"
            },
            {
                "letter": "C",
                "text": "Build a home wherever one chooses"
            },
            {
                "letter": "D",
                "text": "Be a member of any group"
            },
            {
                "letter": "E",
                "text": "Be free from unwarranted publicity"
            }
        ],
        "answer_letter": "E",
        "answer_text": "Be free from unwarranted publicity",
        "solution": "The right to privacy protects individuals from unnecessary or unauthorized intrusion into their personal life, including being subjected to public exposure without consent."
    },
    {
        "id": 5,
        "topic": "Philippine Constitution",
        "question": "A voter is disqualified from exercising the right to suffrage if said voter ________.",
        "options": [
            {
                "letter": "A",
                "text": "Is illiterate"
            },
            {
                "letter": "B",
                "text": "Is poor"
            },
            {
                "letter": "C",
                "text": "Is a naturalized Filipino citizen"
            },
            {
                "letter": "D",
                "text": "Turned 20 years old just before the election"
            },
            {
                "letter": "E",
                "text": "Has been a resident of the Philippines for less than six months"
            }
        ],
        "answer_letter": "E",
        "answer_text": "Has been a resident of the Philippines for less than six months",
        "solution": "To vote in Philippine elections, one must be a resident of the Philippines for at least one year and a resident of the place where they intend to vote for at least six months before the election. So, if a person has been a resident of the country for less than six months, they do not meet the residency requirement and are disqualified from voting."
    },
    {
        "id": 6,
        "topic": "Philippine Constitution",
        "question": "Who may be appointed as member of the Cabinet without needing confirmation from the Commission on Appointments?",
        "options": [
            {
                "letter": "A",
                "text": "Senate President"
            },
            {
                "letter": "B",
                "text": "Any Senator"
            },
            {
                "letter": "C",
                "text": "Vice-President"
            },
            {
                "letter": "D",
                "text": "Speaker of the House"
            },
            {
                "letter": "E",
                "text": "Any Congress Representative"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Vice-President",
        "solution": "The Vice-President may be appointed to a Cabinet position without needing confirmation from the Commission on Appointments, as long as they are already elected and holding office."
    },
    {
        "id": 7,
        "topic": "Philippine Constitution",
        "question": "The right of private individuals to secure for themselves the enjoyment of their means of happiness such as the right to a name, the right to form a family, and the right to security of personal papers and effects are called ________.",
        "options": [
            {
                "letter": "A",
                "text": "Economic and Social Rights"
            },
            {
                "letter": "B",
                "text": "Civil Rights"
            },
            {
                "letter": "C",
                "text": "Cultural Rights"
            },
            {
                "letter": "D",
                "text": "Inherent Rights"
            },
            {
                "letter": "E",
                "text": "Political Rights"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Civil Rights",
        "solution": "Civil rights are rights that protect individuals' freedom and ensure equal treatment under the law. These include rights such as privacy, family life, name, and security."
    },
    {
        "id": 8,
        "topic": "Philippine Constitution",
        "question": "At least how many years after the Constitution has been ratified may the people propose amendments through initiative?",
        "options": [
            {
                "letter": "A",
                "text": "Ten"
            },
            {
                "letter": "B",
                "text": "Seven"
            },
            {
                "letter": "C",
                "text": "Six"
            },
            {
                "letter": "D",
                "text": "Five"
            },
            {
                "letter": "E",
                "text": "Three"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Five",
        "solution": "According to Article XVII, Section 2 of the 1987 Constitution, amendments may be proposed through a people's initiative only after five years from the ratification of the Constitution."
    },
    {
        "id": 9,
        "topic": "Philippine Constitution",
        "question": "Which of the following sectors is NOT represented in the House of Representatives through the party-list system?",
        "options": [
            {
                "letter": "A",
                "text": "Religious"
            },
            {
                "letter": "B",
                "text": "Youth"
            },
            {
                "letter": "C",
                "text": "Women"
            },
            {
                "letter": "D",
                "text": "Peasant"
            },
            {
                "letter": "E",
                "text": "Labor"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Religious",
        "solution": "While the party-list system in the Philippines allows marginalized and underrepresented sectors like women, youth, labor, and peasants to have representation, religious groups are prohibited from registering as party-list organizations due to the principle of separation of Church and State."
    },
    {
        "id": 10,
        "topic": "Philippine Constitution",
        "question": "Which of the following government agencies exercises original and exclusive jurisdiction over all contests relating to the election, returns and qualifications of the President and the Vice-President?",
        "options": [
            {
                "letter": "A",
                "text": "Supreme Court"
            },
            {
                "letter": "B",
                "text": "Senate Electoral Tribunal"
            },
            {
                "letter": "C",
                "text": "Judicial Bar Council"
            },
            {
                "letter": "D",
                "text": "Commission on Elections"
            },
            {
                "letter": "E",
                "text": "Commission on Appointments"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Supreme Court",
        "solution": "Under Article VII, Section 4 of the 1987 Constitution, the Supreme Court sitting en banc acts as the Sole Judge of all contests relating to the election, returns, and qualifications of the President and Vice-President."
    },
    {
        "id": 11,
        "topic": "Philippine Constitution",
        "question": "Who among the following is responsible for determining the existence of probable cause for the issuance of a warrant of arrest or search warrant?",
        "options": [
            {
                "letter": "A",
                "text": "Lawyer"
            },
            {
                "letter": "B",
                "text": "Prosecutor"
            },
            {
                "letter": "C",
                "text": "Judge"
            },
            {
                "letter": "D",
                "text": "Plaintiff"
            },
            {
                "letter": "E",
                "text": "Police Investigator"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Judge",
        "solution": "Only a judge can issue a warrant of arrest or search warrant, based on a personal determination of probable cause."
    },
    {
        "id": 12,
        "topic": "Philippine Constitution",
        "question": "Which of the following statements BEST describes the relationship between global warming and ozone depletion?",
        "options": [
            {
                "letter": "A",
                "text": "Global warming contributes to ozone depletion."
            },
            {
                "letter": "B",
                "text": "Global warming and ozone depletion have nothing to do with each other."
            },
            {
                "letter": "C",
                "text": "Excessive build-up of carbon dioxide causes both global warming and ozone depletion."
            },
            {
                "letter": "D",
                "text": "Ozone depletion contributes to global warming."
            },
            {
                "letter": "E",
                "text": "Ozone depletion and global warming are synonyms."
            }
        ],
        "answer_letter": "B",
        "answer_text": "Global warming and ozone depletion have nothing to do with each other.",
        "solution": "While both are environmental issues, global warming is caused by greenhouse gases (e.g., CO\u2082), and ozone depletion is caused by CFCs. They are separate phenomena."
    },
    {
        "id": 13,
        "topic": "Philippine Constitution",
        "question": "Monoculture cropping or planting a single crop in a large area is not advisable because ________.",
        "options": [
            {
                "letter": "A",
                "text": "It requires more water"
            },
            {
                "letter": "B",
                "text": "It requires less fertilizers"
            },
            {
                "letter": "C",
                "text": "It lowers the water table"
            },
            {
                "letter": "D",
                "text": "It causes drought"
            },
            {
                "letter": "E",
                "text": "It promotes pest infestation"
            }
        ],
        "answer_letter": "E",
        "answer_text": "It promotes pest infestation",
        "solution": "Monoculture makes it easier for pests to spread, leading to increased infestations and reduced crop resilience."
    },
    {
        "id": 14,
        "topic": "Philippine Constitution",
        "question": "Which of the following is the major cause of coral reef destruction?",
        "options": [
            {
                "letter": "A",
                "text": "Dynamite fishing"
            },
            {
                "letter": "B",
                "text": "Muro-Ami"
            },
            {
                "letter": "C",
                "text": "Oil Spill"
            },
            {
                "letter": "D",
                "text": "Sewage pollution"
            },
            {
                "letter": "E",
                "text": "Siltation"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Dynamite fishing",
        "solution": "Dynamite fishing is highly destructive to coral reefs, killing fish and breaking coral structures."
    },
    {
        "id": 15,
        "topic": "Philippine Constitution",
        "question": "The lasting environmental impact of a large-scale mining operation comes from ________.",
        "options": [
            {
                "letter": "A",
                "text": "Air pollution"
            },
            {
                "letter": "B",
                "text": "Noise pollution"
            },
            {
                "letter": "C",
                "text": "Deforestation"
            },
            {
                "letter": "D",
                "text": "Mine railings"
            },
            {
                "letter": "E",
                "text": "Unrestored mined out areas"
            }
        ],
        "answer_letter": "E",
        "answer_text": "Unrestored mined out areas",
        "solution": "Unrestored or abandoned mined-out areas result in long-term land degradation and environmental damage."
    },
    {
        "id": 16,
        "topic": "Philippine Constitution",
        "question": "Jaywalking, throwing garbage anywhere, vandalism, not waiting in line, and tardiness are manifestations of ________.",
        "options": [
            {
                "letter": "A",
                "text": "Disorderliness"
            },
            {
                "letter": "B",
                "text": "Lack of discipline"
            },
            {
                "letter": "C",
                "text": "Lack of sense of property"
            },
            {
                "letter": "D",
                "text": "Lack of punctuality"
            },
            {
                "letter": "E",
                "text": "Disregard for other people's property"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Lack of discipline",
        "solution": "These behaviors reflect a lack of self-control and discipline in following rules and social norms."
    },
    {
        "id": 17,
        "topic": "Philippine Constitution",
        "question": "Fishery resource in marine and coastal waters may be considered as \u201copen access resources\u201d because of the ________.",
        "options": [
            {
                "letter": "A",
                "text": "Mobile nature of fish and water"
            },
            {
                "letter": "B",
                "text": "Difficulty in marking sea boundaries"
            },
            {
                "letter": "C",
                "text": "Proliferation of fish pens"
            },
            {
                "letter": "D",
                "text": "Overfishing in municipal waters"
            },
            {
                "letter": "E",
                "text": "Increasing demand for fish, which is rich in protein"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Difficulty in marking sea boundaries",
        "solution": "It's hard to control or limit access to marine resources, making them vulnerable to overuse."
    },
    {
        "id": 18,
        "topic": "Philippine Constitution",
        "question": "Every government agency is required to develop, update regularly, and make available to the transacting public ________.",
        "options": [
            {
                "letter": "A",
                "text": "The names of action officers"
            },
            {
                "letter": "B",
                "text": "The performance targets"
            },
            {
                "letter": "C",
                "text": "The rates of service fees"
            },
            {
                "letter": "D",
                "text": "A service guide"
            },
            {
                "letter": "E",
                "text": "A directory of officials"
            }
        ],
        "answer_letter": "D",
        "answer_text": "A service guide",
        "solution": "The Citizens Charter or service guide outlines services, requirements, fees, and processing time for transparency and efficiency."
    },
    {
        "id": 19,
        "topic": "Philippine Constitution",
        "question": "Within the provided periods of time, public officials and employees are required to file their statement of assets and liabilities and financial disclosure in the following instances EXCEPT ________.",
        "options": [
            {
                "letter": "A",
                "text": "Compulsory retirement"
            },
            {
                "letter": "B",
                "text": "Voluntary resignation"
            },
            {
                "letter": "C",
                "text": "Acceptance of foreign scholarship"
            },
            {
                "letter": "D",
                "text": "Assumption to office = 30 days after assumption to office"
            },
            {
                "letter": "E",
                "text": "Expiration of the term of office = within 30 days after separation from office"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Acceptance of foreign scholarship",
        "solution": "Filing of SALN (Statement of Assets, Liabilities, and Net Worth) is not mandatory for accepting a foreign scholarship."
    },
    {
        "id": 20,
        "topic": "Philippine Constitution",
        "question": "For expenditures processing of documents, except otherwise provided by law or regulation, how many initials or signatures must any written action or decision contain?",
        "options": [
            {
                "letter": "A",
                "text": "6"
            },
            {
                "letter": "B",
                "text": "5"
            },
            {
                "letter": "C",
                "text": "4"
            },
            {
                "letter": "D",
                "text": "3"
            },
            {
                "letter": "E",
                "text": "2"
            }
        ],
        "answer_letter": "D",
        "answer_text": "3",
        "solution": "Standard government protocol often requires three signatures/initials for accountability: preparer, reviewer, and approver."
    },
    {
        "id": 21,
        "topic": "Philippine Constitution",
        "question": "Which of the following is true about elective local officials?",
        "options": [
            {
                "letter": "A",
                "text": "The term of office is three years"
            },
            {
                "letter": "B",
                "text": "Barangay officials' term of office is indefinite"
            },
            {
                "letter": "C",
                "text": "An official may be reelected indefinitely"
            },
            {
                "letter": "D",
                "text": "An official may not serve for less than three terms"
            }
        ],
        "answer_letter": "A",
        "answer_text": "The term of office is three years",
        "solution": "Elective local officials in the Philippines serve three-year terms, with a maximum of three consecutive terms."
    },
    {
        "id": 22,
        "topic": "Philippine Constitution",
        "question": "What is recognized by the state as the foundation of the nation?",
        "options": [
            {
                "letter": "A",
                "text": "Family"
            },
            {
                "letter": "B",
                "text": "Barangay"
            },
            {
                "letter": "C",
                "text": "Community"
            },
            {
                "letter": "D",
                "text": "Municipality"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Family",
        "solution": "The family is considered the foundation of the nation according to the Philippine Constitution."
    },
    {
        "id": 23,
        "topic": "Philippine Constitution",
        "question": "Which of the following is a Constitutional Commission?",
        "options": [
            {
                "letter": "A",
                "text": "Commission of Human Rights"
            },
            {
                "letter": "B",
                "text": "Philippines Commission on Good Government"
            },
            {
                "letter": "C",
                "text": "Civil Service Commission"
            },
            {
                "letter": "D",
                "text": "Commission on Natural Resources"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Civil Service Commission",
        "solution": "The CSC is one of the three Constitutional Commissions, along with COMELEC and COA."
    },
    {
        "id": 24,
        "topic": "Philippine Constitution",
        "question": "What may be classified as alienable lands of the public domain?",
        "options": [
            {
                "letter": "A",
                "text": "Agricultural lands"
            },
            {
                "letter": "B",
                "text": "Mineral lands"
            },
            {
                "letter": "C",
                "text": "Forest"
            },
            {
                "letter": "D",
                "text": "National park"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Agricultural lands",
        "solution": "Only agricultural lands are alienable and disposable, meaning they can be owned or sold."
    },
    {
        "id": 25,
        "topic": "Philippine Constitution",
        "question": "What Act implements the mandate for the \u201cState to make essentials goods, health and other social services available to all people at affordable cost?\u201d",
        "options": [
            {
                "letter": "A",
                "text": "Land Reform Program"
            },
            {
                "letter": "B",
                "text": "Resettlement Act"
            },
            {
                "letter": "C",
                "text": "Generics Act"
            },
            {
                "letter": "D",
                "text": "Freedom Act"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Generics Act",
        "solution": "The Generics Act of 1988 promotes affordable medicines and access to health services."
    },
    {
        "id": 26,
        "topic": "Philippine Constitution",
        "question": "Which of the following is not removable from office by impeachment?",
        "options": [
            {
                "letter": "A",
                "text": "Senator"
            },
            {
                "letter": "B",
                "text": "Members of the Constitutional Commissions"
            },
            {
                "letter": "C",
                "text": "Members of the Supreme Court"
            },
            {
                "letter": "D",
                "text": "The Ombudsman"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Senator",
        "solution": "Senators are not subject to impeachment. Only the President, Vice-President, Supreme Court Justices, Constitutional Commission members, and the Ombudsman are."
    },
    {
        "id": 27,
        "topic": "Philippine Constitution",
        "question": "The national language of the Philippines is?",
        "options": [
            {
                "letter": "A",
                "text": "Tagalog"
            },
            {
                "letter": "B",
                "text": "English and Filipino"
            },
            {
                "letter": "C",
                "text": "Filipino"
            },
            {
                "letter": "D",
                "text": "Pilipino"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Filipino",
        "solution": "Filipino is the national language of the Philippines, as stated in the Constitution."
    },
    {
        "id": 28,
        "topic": "Philippine Constitution",
        "question": "Which of the following statements is true about taxes?",
        "options": [
            {
                "letter": "A",
                "text": "It is an enforced contribution"
            },
            {
                "letter": "B",
                "text": "It is payable both in cash and in kind"
            },
            {
                "letter": "C",
                "text": "It is voluntary"
            },
            {
                "letter": "D",
                "text": "It is based on one's desire"
            }
        ],
        "answer_letter": "A",
        "answer_text": "It is an enforced contribution",
        "solution": "Taxes are compulsory payments imposed by the government to fund public services."
    },
    {
        "id": 29,
        "topic": "Philippine Constitution",
        "question": "When is the deadline for filing income tax returns for every taxable year?",
        "options": [
            {
                "letter": "A",
                "text": "March 15"
            },
            {
                "letter": "B",
                "text": "March 30"
            },
            {
                "letter": "C",
                "text": "April 15"
            },
            {
                "letter": "D",
                "text": "April 30"
            }
        ],
        "answer_letter": "C",
        "answer_text": "April 15",
        "solution": "The annual income tax return must be filed on or before April 15 of the following year."
    },
    {
        "id": 30,
        "topic": "Philippine Constitution",
        "question": "What tax is paid by individuals who derive compensation?",
        "options": [
            {
                "letter": "A",
                "text": "Excise tax"
            },
            {
                "letter": "B",
                "text": "Income tax"
            },
            {
                "letter": "C",
                "text": "Real estate tax"
            },
            {
                "letter": "D",
                "text": "Value added tax"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Income tax",
        "solution": "Individuals who earn money from employment or business activities pay income tax. It is levied on salaries, wages, professional fees, and other compensation."
    },
    {
        "id": 31,
        "topic": "Philippine Constitution",
        "question": "Which of the following powers CANNOT be exercised by the President without Congress?",
        "options": [
            {
                "letter": "A",
                "text": "Granting executive clemency"
            },
            {
                "letter": "B",
                "text": "Declaring martial law"
            },
            {
                "letter": "C",
                "text": "Suspending the privilege of the writ of habeas corpus"
            },
            {
                "letter": "D",
                "text": "Declaring a state of war"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Declaring a state of war",
        "solution": "Only Congress, by a two-thirds vote, can declare a state of war."
    },
    {
        "id": 32,
        "topic": "Philippine Constitution",
        "question": "When can the Supreme Court review a declaration of martial law?",
        "options": [
            {
                "letter": "A",
                "text": "Anytime"
            },
            {
                "letter": "B",
                "text": "Only when a petition is filed"
            },
            {
                "letter": "C",
                "text": "Only upon the President's request"
            },
            {
                "letter": "D",
                "text": "Never; it is exclusive executive power"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Only when a petition is filed",
        "solution": "The Supreme Court may review the factual basis of martial law upon petition by a citizen."
    },
    {
        "id": 33,
        "topic": "Philippine Constitution",
        "question": "What constitutional principle states that no person shall be deprived of life, liberty, or property without due process?",
        "options": [
            {
                "letter": "A",
                "text": "Checks and balances"
            },
            {
                "letter": "B",
                "text": "Social justice"
            },
            {
                "letter": "C",
                "text": "Due process of law"
            },
            {
                "letter": "D",
                "text": "Equal protection"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Due process of law",
        "solution": "Due process of law, found in Article III, protects individuals from unfair treatment and deprivation of life, liberty, or property without legal procedures."
    },
    {
        "id": 34,
        "topic": "Philippine Constitution",
        "question": "The power to declare a law unconstitutional belongs to the ________.",
        "options": [
            {
                "letter": "A",
                "text": "Executive"
            },
            {
                "letter": "B",
                "text": "Senate"
            },
            {
                "letter": "C",
                "text": "Supreme Court"
            },
            {
                "letter": "D",
                "text": "House of Representatives"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Supreme Court",
        "solution": "Judicial review is a judicial power exercised by the Supreme Court."
    },
    {
        "id": 35,
        "topic": "Philippine Constitution",
        "question": "Which body approves treaties and international agreements?",
        "options": [
            {
                "letter": "A",
                "text": "Supreme Court"
            },
            {
                "letter": "B",
                "text": "Senate"
            },
            {
                "letter": "C",
                "text": "House of Representatives"
            },
            {
                "letter": "D",
                "text": "DFA"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Senate",
        "solution": "Treaties must have the concurrence of two-thirds of all Senators."
    },
    {
        "id": 36,
        "topic": "Philippine Constitution",
        "question": "Who can appoint members of the Commission on Audit (COA)?",
        "options": [
            {
                "letter": "A",
                "text": "President with confirmation"
            },
            {
                "letter": "B",
                "text": "President alone"
            },
            {
                "letter": "C",
                "text": "Congress"
            },
            {
                "letter": "D",
                "text": "Judicial and Bar Council"
            }
        ],
        "answer_letter": "B",
        "answer_text": "President alone",
        "solution": "Constitutional Commission members (COMELEC, COA, CSC) are appointed by the President without confirmation."
    },
    {
        "id": 37,
        "topic": "Philippine Constitution",
        "question": "What branch has the power of appropriation (\u201cpower of the purse\u201d)?",
        "options": [
            {
                "letter": "A",
                "text": "Judiciary"
            },
            {
                "letter": "B",
                "text": "Executive"
            },
            {
                "letter": "C",
                "text": "Senate"
            },
            {
                "letter": "D",
                "text": "Congress"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Congress",
        "solution": "All money bills must originate from the House of Representatives; the power of the purse belongs to Congress."
    },
    {
        "id": 38,
        "topic": "Philippine Constitution",
        "question": "The right against self-incrimination means the accused may:",
        "options": [
            {
                "letter": "A",
                "text": "Refuse to testify at all times"
            },
            {
                "letter": "B",
                "text": "Refuse to answer if the answer may incriminate them"
            },
            {
                "letter": "C",
                "text": "Not be arrested"
            },
            {
                "letter": "D",
                "text": "Demand a speedy trial"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Refuse to answer if the answer may incriminate them",
        "solution": "The right against self-incrimination prevents compelled testimony that may lead to prosecution."
    },
    {
        "id": 39,
        "topic": "Philippine Constitution",
        "question": "The term of office of a Member of the House of Representatives is ________.",
        "options": [
            {
                "letter": "A",
                "text": "3 years"
            },
            {
                "letter": "B",
                "text": "4 years"
            },
            {
                "letter": "C",
                "text": "6 years"
            },
            {
                "letter": "D",
                "text": "9 years"
            }
        ],
        "answer_letter": "A",
        "answer_text": "3 years",
        "solution": "Members of the House of Representatives serve a term of three years."
    },
    {
        "id": 40,
        "topic": "Philippine Constitution",
        "question": "A law that punishes an act which was not a crime when committed is called a ________.",
        "options": [
            {
                "letter": "A",
                "text": "Martial law"
            },
            {
                "letter": "B",
                "text": "Ex post facto law"
            },
            {
                "letter": "C",
                "text": "Writ of habeas corpus"
            },
            {
                "letter": "D",
                "text": "Bill of attainder"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Ex post facto law",
        "solution": "An ex post facto law punishes an act that was not a crime when it was committed, and such laws are prohibited by the Constitution."
    }
];

const genInfoConductQuestions = [
    {
        "id": 1,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "RA 6713 is also known as the Code of Conduct and Ethical Standards for Public Officials and Employees because it primarily aims to:",
        "options": [
            {
                "letter": "A",
                "text": "Regulate salaries of public officials"
            },
            {
                "letter": "B",
                "text": "Establish rules for political parties"
            },
            {
                "letter": "C",
                "text": "Promote high ethical standards in public service"
            },
            {
                "letter": "D",
                "text": "Manage government procurement"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Promote high ethical standards in public service",
        "solution": "Promote high ethical standards in public service."
    },
    {
        "id": 2,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Under RA 6713, \u201cGovernment\u201d includes:",
        "options": [
            {
                "letter": "A",
                "text": "Only national government agencies"
            },
            {
                "letter": "B",
                "text": "National, local, GOCCs and subsidiaries"
            },
            {
                "letter": "C",
                "text": "Only elected officials"
            },
            {
                "letter": "D",
                "text": "Only civil servants"
            }
        ],
        "answer_letter": "B",
        "answer_text": "National, local, GOCCs and subsidiaries",
        "solution": "Covers national, local, GOCCs, and subsidiaries."
    },
    {
        "id": 3,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "A \u201cpublic official\u201d under the law refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Only regular employees"
            },
            {
                "letter": "B",
                "text": "Only elected officials"
            },
            {
                "letter": "C",
                "text": "Elective and appointive officials and employees"
            },
            {
                "letter": "D",
                "text": "Only military personnel"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Elective and appointive officials and employees",
        "solution": "Includes elective and appointive officials/employees."
    },
    {
        "id": 4,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "A \u201cgift\u201d under RA 6713 is defined as:",
        "options": [
            {
                "letter": "A",
                "text": "Any item received from relatives"
            },
            {
                "letter": "B",
                "text": "Anything received gratuitously or liberally"
            },
            {
                "letter": "C",
                "text": "Salary increases"
            },
            {
                "letter": "D",
                "text": "Government-issued benefits"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Anything received gratuitously or liberally",
        "solution": "Anything received gratuitously or by liberality."
    },
    {
        "id": 5,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "\u201cConflict of interest\u201d arises when a public official:",
        "options": [
            {
                "letter": "A",
                "text": "Uses government documents"
            },
            {
                "letter": "B",
                "text": "Has a private interest that may affect official duty"
            },
            {
                "letter": "C",
                "text": "Works overtime"
            },
            {
                "letter": "D",
                "text": "Travels abroad"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Has a private interest that may affect official duty",
        "solution": "Private interest affecting official duty = conflict."
    },
    {
        "id": 6,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "The policy of the State under RA 6713 is to make public officials:",
        "options": [
            {
                "letter": "A",
                "text": "Wealthier than private citizens"
            },
            {
                "letter": "B",
                "text": "Accountable to the people with integrity and loyalty"
            },
            {
                "letter": "C",
                "text": "Free from any scrutiny"
            },
            {
                "letter": "D",
                "text": "Exclusive to political party lines"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Accountable to the people with integrity and loyalty",
        "solution": "Officials must be accountable, loyal, patriotic."
    },
    {
        "id": 7,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "A relative under RA 6713 includes:",
        "options": [
            {
                "letter": "A",
                "text": "Siblings only"
            },
            {
                "letter": "B",
                "text": "All persons related within the fourth civil degree"
            },
            {
                "letter": "C",
                "text": "Employers"
            },
            {
                "letter": "D",
                "text": "Neighbors"
            }
        ],
        "answer_letter": "B",
        "answer_text": "All persons related within the fourth civil degree",
        "solution": "Relatives within fourth civil degree."
    },
    {
        "id": 8,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Which of the following is included in the Act\u2019s norms of conduct?",
        "options": [
            {
                "letter": "A",
                "text": "Personal wealth accumulation"
            },
            {
                "letter": "B",
                "text": "Loyalty to party over country"
            },
            {
                "letter": "C",
                "text": "Political neutrality"
            },
            {
                "letter": "D",
                "text": "Bias in service delivery"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Political neutrality",
        "solution": "Political neutrality is required."
    },
    {
        "id": 9,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Simple living in the law means that officials:",
        "options": [
            {
                "letter": "A",
                "text": "May display wealth if they want"
            },
            {
                "letter": "B",
                "text": "Shall not indulge in extravagant or ostentatious display of wealth"
            },
            {
                "letter": "C",
                "text": "Should live beyond their income"
            },
            {
                "letter": "D",
                "text": "Must buy luxury goods annually"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Shall not indulge in extravagant or ostentatious display of wealth",
        "solution": "Officials must avoid extravagant wealth display."
    },
    {
        "id": 10,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Nationalism and patriotism in RA 6713 require officials to:",
        "options": [
            {
                "letter": "A",
                "text": "Prioritize foreign companies"
            },
            {
                "letter": "B",
                "text": "Promote use of locally produced goods"
            },
            {
                "letter": "C",
                "text": "Only work for their hometown"
            },
            {
                "letter": "D",
                "text": "Disregard national interest"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Promote use of locally produced goods",
        "solution": "Promote use of locally produced goods."
    },
    {
        "id": 11,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Commitment to public interest means officials must:",
        "options": [
            {
                "letter": "A",
                "text": "Use their office for personal gain"
            },
            {
                "letter": "B",
                "text": "Uphold public interest over personal interest"
            },
            {
                "letter": "C",
                "text": "Refuse service to others"
            },
            {
                "letter": "D",
                "text": "Delegate duties to relatives"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Uphold public interest over personal interest",
        "solution": "Public interest comes before personal interest."
    },
    {
        "id": 12,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Professionalism in RA 6713 expects officials to:",
        "options": [
            {
                "letter": "A",
                "text": "Work only when supervised"
            },
            {
                "letter": "B",
                "text": "Perform duties with devotion, excellence, and skill"
            },
            {
                "letter": "C",
                "text": "Avoid public service"
            },
            {
                "letter": "D",
                "text": "Seek undue patronage"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Perform duties with devotion, excellence, and skill",
        "solution": "Duties performed with devotion and skill."
    },
    {
        "id": 13,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Justness and sincerity require officials to:",
        "options": [
            {
                "letter": "A",
                "text": "Discriminate against others"
            },
            {
                "letter": "B",
                "text": "Respect rights of all and avoid acts contrary to public interest"
            },
            {
                "letter": "C",
                "text": "Favor certain groups"
            },
            {
                "letter": "D",
                "text": "Ignore good morals"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Respect rights of all and avoid acts contrary to public interest",
        "solution": "Respect all and avoid acts against public interest."
    },
    {
        "id": 14,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Political neutrality in service means:",
        "options": [
            {
                "letter": "A",
                "text": "Favoring people of same party"
            },
            {
                "letter": "B",
                "text": "Delivering services to all fairly"
            },
            {
                "letter": "C",
                "text": "Refusing to serve others"
            },
            {
                "letter": "D",
                "text": "Promoting a political agenda at work"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Delivering services to all fairly",
        "solution": "Serve all fairly, politically neutral."
    },
    {
        "id": 15,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Responsiveness includes:",
        "options": [
            {
                "letter": "A",
                "text": "Delaying responses to requests"
            },
            {
                "letter": "B",
                "text": "Providing prompt, courteous service and clear information"
            },
            {
                "letter": "C",
                "text": "Refusing to answer public inquiries"
            },
            {
                "letter": "D",
                "text": "Ignoring suggestions"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Providing prompt, courteous service and clear information",
        "solution": "Provide prompt, courteous service."
    },
    {
        "id": 16,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Nationalism under RA 6713 also means:",
        "options": [
            {
                "letter": "A",
                "text": "Promote foreign interests"
            },
            {
                "letter": "B",
                "text": "Defend Philippine sovereignty"
            },
            {
                "letter": "C",
                "text": "Work for foreign companies"
            },
            {
                "letter": "D",
                "text": "Avoid local goods"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Defend Philippine sovereignty",
        "solution": "Defend Philippine sovereignty."
    },
    {
        "id": 17,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Commitment to democracy includes:",
        "options": [
            {
                "letter": "A",
                "text": "Loyalty to party over country"
            },
            {
                "letter": "B",
                "text": "Upholding public accountability and Constitution"
            },
            {
                "letter": "C",
                "text": "Prioritizing private interests"
            },
            {
                "letter": "D",
                "text": "Avoiding democratic values"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Upholding public accountability and Constitution",
        "solution": "Uphold Constitution and public accountability."
    },
    {
        "id": 18,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Simple living is a standard that prohibits:",
        "options": [
            {
                "letter": "A",
                "text": "Modest lifestyle"
            },
            {
                "letter": "B",
                "text": "Ostentatious display of wealth"
            },
            {
                "letter": "C",
                "text": "Frugality"
            },
            {
                "letter": "D",
                "text": "Ethical conduct"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Ostentatious display of wealth",
        "solution": "No ostentatious display of wealth."
    },
    {
        "id": 19,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "RA 6713 requires public officials to be:",
        "options": [
            {
                "letter": "A",
                "text": "Loyal only to family"
            },
            {
                "letter": "B",
                "text": "Accountable to the people"
            },
            {
                "letter": "C",
                "text": "Indifferent to citizens"
            },
            {
                "letter": "D",
                "text": "Focused on external affiliations"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Accountable to the people",
        "solution": "Officials must be accountable to the people."
    },
    {
        "id": 20,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Public officials must:",
        "options": [
            {
                "letter": "A",
                "text": "Serve only constituents"
            },
            {
                "letter": "B",
                "text": "Serve all people impartially"
            },
            {
                "letter": "C",
                "text": "Serve only friends"
            },
            {
                "letter": "D",
                "text": "Avoid citizen consultations"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Serve all people impartially",
        "solution": "Serve all impartially."
    },
    {
        "id": 21,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Public officials must respond to letters within:",
        "options": [
            {
                "letter": "A",
                "text": "5 working days"
            },
            {
                "letter": "B",
                "text": "10 working days"
            },
            {
                "letter": "C",
                "text": "15 working days"
            },
            {
                "letter": "D",
                "text": "30 working days"
            }
        ],
        "answer_letter": "C",
        "answer_text": "15 working days",
        "solution": "Respond to letters within 15 working days."
    },
    {
        "id": 22,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Annual performance reports must be submitted within:",
        "options": [
            {
                "letter": "A",
                "text": "30 working days"
            },
            {
                "letter": "B",
                "text": "45 working days"
            },
            {
                "letter": "C",
                "text": "60 working days"
            },
            {
                "letter": "D",
                "text": "90 working days"
            }
        ],
        "answer_letter": "B",
        "answer_text": "45 working days",
        "solution": "Submit annual reports within 45 working days."
    },
    {
        "id": 23,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "All official papers must be processed:",
        "options": [
            {
                "letter": "A",
                "text": "At leisure"
            },
            {
                "letter": "B",
                "text": "Within reasonable time"
            },
            {
                "letter": "C",
                "text": "Only by the head of office"
            },
            {
                "letter": "D",
                "text": "After one month"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Within reasonable time",
        "solution": "Official papers processed expeditiously."
    },
    {
        "id": 24,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Public documents must be:",
        "options": [
            {
                "letter": "A",
                "text": "Kept secret"
            },
            {
                "letter": "B",
                "text": "Made accessible and available for inspection"
            },
            {
                "letter": "C",
                "text": "Destroyed immediately"
            },
            {
                "letter": "D",
                "text": "Withheld indefinitely"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Made accessible and available for inspection",
        "solution": "Documents must be accessible to the public."
    },
    {
        "id": 25,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Officials must act on personal transactions of the public:",
        "options": [
            {
                "letter": "A",
                "text": "Slowly"
            },
            {
                "letter": "B",
                "text": "Promptly and expeditiously"
            },
            {
                "letter": "C",
                "text": "Only when convenient"
            },
            {
                "letter": "D",
                "text": "At year-end"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Promptly and expeditiously",
        "solution": "Public transactions handled promptly."
    },
    {
        "id": 26,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Disclosure of relatives and interests is:",
        "options": [
            {
                "letter": "A",
                "text": "Optional"
            },
            {
                "letter": "B",
                "text": "A legal duty for transparency"
            },
            {
                "letter": "C",
                "text": "Prohibited"
            },
            {
                "letter": "D",
                "text": "Not covered"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A legal duty for transparency",
        "solution": "Disclose relatives for transparency."
    },
    {
        "id": 27,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "SALN filings are required for transparency and to avoid:",
        "options": [
            {
                "letter": "A",
                "text": "Examination"
            },
            {
                "letter": "B",
                "text": "Conflict of interest"
            },
            {
                "letter": "C",
                "text": "Random data collection"
            },
            {
                "letter": "D",
                "text": "Private investigation"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Conflict of interest",
        "solution": "SALN avoids conflicts of interest."
    },
    {
        "id": 28,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Statements filed under RA 6713 must be available for public inspection for:",
        "options": [
            {
                "letter": "A",
                "text": "5 days"
            },
            {
                "letter": "B",
                "text": "10 working days"
            },
            {
                "letter": "C",
                "text": "30 days"
            },
            {
                "letter": "D",
                "text": "1 year"
            }
        ],
        "answer_letter": "B",
        "answer_text": "10 working days",
        "solution": "Statements available after 10 working days."
    },
    {
        "id": 29,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Making documents available for copying may require:",
        "options": [
            {
                "letter": "A",
                "text": "No cost"
            },
            {
                "letter": "B",
                "text": "Reasonable reproduction fees"
            },
            {
                "letter": "C",
                "text": "Unlimited fees"
            },
            {
                "letter": "D",
                "text": "Refusal to copy"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Reasonable reproduction fees",
        "solution": "Reasonable reproduction fees allowed."
    },
    {
        "id": 30,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Officials must act on letters and requests with:",
        "options": [
            {
                "letter": "A",
                "text": "Indifference"
            },
            {
                "letter": "B",
                "text": "Promptness"
            },
            {
                "letter": "C",
                "text": "Delay"
            },
            {
                "letter": "D",
                "text": "Partial response"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Promptness",
        "solution": "Requests processed promptly."
    },
    {
        "id": 31,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Accepting gifts of significant value is:",
        "options": [
            {
                "letter": "A",
                "text": "Allowed always"
            },
            {
                "letter": "B",
                "text": "Prohibited if in expectation of favor"
            },
            {
                "letter": "C",
                "text": "Required"
            },
            {
                "letter": "D",
                "text": "Encouraged"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Prohibited if in expectation of favor",
        "solution": "Accepting gifts expecting favors is prohibited."
    },
    {
        "id": 32,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "A public official may not have direct financial interest in:",
        "options": [
            {
                "letter": "A",
                "text": "Personal hobbies"
            },
            {
                "letter": "B",
                "text": "Transactions requiring his approval"
            },
            {
                "letter": "C",
                "text": "Family vacations"
            },
            {
                "letter": "D",
                "text": "Past jobs"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Transactions requiring his approval",
        "solution": "Cannot have financial interest in matters needing approval."
    },
    {
        "id": 33,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Outside employment is prohibited if:",
        "options": [
            {
                "letter": "A",
                "text": "It conflicts with official duties"
            },
            {
                "letter": "B",
                "text": "It's unrelated"
            },
            {
                "letter": "C",
                "text": "Part-time"
            },
            {
                "letter": "D",
                "text": "Volunteer"
            }
        ],
        "answer_letter": "A",
        "answer_text": "It conflicts with official duties",
        "solution": "Outside employment conflicting with duties is prohibited."
    },
    {
        "id": 34,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Misuse of confidential information for private gain is:",
        "options": [
            {
                "letter": "A",
                "text": "Allowed"
            },
            {
                "letter": "B",
                "text": "A prohibited act"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A prohibited act",
        "solution": "Misuse of confidential information is prohibited."
    },
    {
        "id": 35,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Recommending someone to a private enterprise regulated by your office is:",
        "options": [
            {
                "letter": "A",
                "text": "Allowed"
            },
            {
                "letter": "B",
                "text": "Prohibited"
            },
            {
                "letter": "C",
                "text": "Irrelevant"
            },
            {
                "letter": "D",
                "text": "Encouraged"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Prohibited",
        "solution": "Cannot recommend enterprises you regulate."
    },
    {
        "id": 36,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Prohibited acts under RA 6713 continue to apply even after:",
        "options": [
            {
                "letter": "A",
                "text": "One week"
            },
            {
                "letter": "B",
                "text": "One year after separation"
            },
            {
                "letter": "C",
                "text": "Ten years"
            },
            {
                "letter": "D",
                "text": "Never"
            }
        ],
        "answer_letter": "B",
        "answer_text": "One year after separation",
        "solution": "Prohibited acts continue 1 year after separation."
    },
    {
        "id": 37,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Violators of Sections 7, 8 or 9 may be punished with:",
        "options": [
            {
                "letter": "A",
                "text": "Community service only"
            },
            {
                "letter": "B",
                "text": "Imprisonment up to 5 years and/or fine"
            },
            {
                "letter": "C",
                "text": "Job promotion"
            },
            {
                "letter": "D",
                "text": "Nothing"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Imprisonment up to 5 years and/or fine",
        "solution": "Violators may face imprisonment and/or fine."
    },
    {
        "id": 38,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Private individuals who conspire with officials in wrongdoing:",
        "options": [
            {
                "letter": "A",
                "text": "Escape liability"
            },
            {
                "letter": "B",
                "text": "Are subject to penal liabilities too"
            },
            {
                "letter": "C",
                "text": "Are only reprimanded"
            },
            {
                "letter": "D",
                "text": "Receive awards"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Are subject to penal liabilities too",
        "solution": "Private conspirators liable too."
    },
    {
        "id": 39,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Penalties for administrative violations can include:",
        "options": [
            {
                "letter": "A",
                "text": "Salary increase"
            },
            {
                "letter": "B",
                "text": "Removal or dismissal"
            },
            {
                "letter": "C",
                "text": "Bonus"
            },
            {
                "letter": "D",
                "text": "Promotion"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Removal or dismissal",
        "solution": "Administrative penalties include removal/dismissal."
    },
    {
        "id": 40,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "The primary body tasked with enforcing RA 6713 is:",
        "options": [
            {
                "letter": "A",
                "text": "Supreme Court"
            },
            {
                "letter": "B",
                "text": "Civil Service Commission"
            },
            {
                "letter": "C",
                "text": "Department of Labor"
            },
            {
                "letter": "D",
                "text": "Commission on Elections"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Civil Service Commission",
        "solution": "Civil Service Commission enforces RA 6713."
    },
    {
        "id": 41,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Under RA 6713, \u201csimple living\u201d discourages:",
        "options": [
            {
                "letter": "A",
                "text": "Saving money"
            },
            {
                "letter": "B",
                "text": "Extravagant displays of wealth"
            },
            {
                "letter": "C",
                "text": "Healthy lifestyle"
            },
            {
                "letter": "D",
                "text": "Budgeting"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Extravagant displays of wealth",
        "solution": "Simple living prohibits ostentation."
    },
    {
        "id": 42,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Political neutrality prohibits:",
        "options": [
            {
                "letter": "A",
                "text": "Serving all fairly"
            },
            {
                "letter": "B",
                "text": "Serving based on party preference"
            },
            {
                "letter": "C",
                "text": "Upholding constitutional values"
            },
            {
                "letter": "D",
                "text": "Ignoring service responsibilities"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Serving based on party preference",
        "solution": "Political neutrality forbids preference by party."
    },
    {
        "id": 43,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Commitment to democracy requires officials to uphold:",
        "options": [
            {
                "letter": "A",
                "text": "Partisan loyalty"
            },
            {
                "letter": "B",
                "text": "Constitution and accountability"
            },
            {
                "letter": "C",
                "text": "Personal agenda"
            },
            {
                "letter": "D",
                "text": "Political connections"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Constitution and accountability",
        "solution": "Uphold Constitution and accountability."
    },
    {
        "id": 44,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "A government employee who delays document processing violates:",
        "options": [
            {
                "letter": "A",
                "text": "Responsiveness duty"
            },
            {
                "letter": "B",
                "text": "Simple living rule"
            },
            {
                "letter": "C",
                "text": "Nationalism principle"
            },
            {
                "letter": "D",
                "text": "None"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Responsiveness duty",
        "solution": "Delays violate responsiveness."
    },
    {
        "id": 45,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Officials must ensure that services are delivered:",
        "options": [
            {
                "letter": "A",
                "text": "Slowly"
            },
            {
                "letter": "B",
                "text": "Promptly and courteously"
            },
            {
                "letter": "C",
                "text": "With prejudice"
            },
            {
                "letter": "D",
                "text": "Only to friends"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Promptly and courteously",
        "solution": "Services delivered promptly and courteously."
    },
    {
        "id": 46,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Upholding public interest over personal interest includes:",
        "options": [
            {
                "letter": "A",
                "text": "Prioritizing self-gain"
            },
            {
                "letter": "B",
                "text": "Avoiding wastage of public funds"
            },
            {
                "letter": "C",
                "text": "Misusing resources"
            },
            {
                "letter": "D",
                "text": "Personal favoritism"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Avoiding wastage of public funds",
        "solution": "Avoid wasting public funds; prioritize public interest."
    },
    {
        "id": 47,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "An official who dumps confidential info for profit is guilty of:",
        "options": [
            {
                "letter": "A",
                "text": "Public service"
            },
            {
                "letter": "B",
                "text": "Prohibited act"
            },
            {
                "letter": "C",
                "text": "Ethical conduct"
            },
            {
                "letter": "D",
                "text": "Civil service"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Prohibited act",
        "solution": "Misusing confidential info is prohibited."
    },
    {
        "id": 48,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "An official who engages in conflicting outside employment violates which section?",
        "options": [
            {
                "letter": "A",
                "text": "Norms of conduct"
            },
            {
                "letter": "B",
                "text": "Prohibited acts"
            },
            {
                "letter": "C",
                "text": "Duties"
            },
            {
                "letter": "D",
                "text": "Title"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Prohibited acts",
        "solution": "Conflicting outside employment is prohibited."
    },
    {
        "id": 49,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "The system of incentives and rewards is designed to:",
        "options": [
            {
                "letter": "A",
                "text": "Punish officials"
            },
            {
                "letter": "B",
                "text": "Motivate ethical conduct"
            },
            {
                "letter": "C",
                "text": "Ignore merit"
            },
            {
                "letter": "D",
                "text": "Reward only based on seniority"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Motivate ethical conduct",
        "solution": "Incentives motivate ethical conduct."
    },
    {
        "id": 50,
        "topic": "Code of Conduct (R.A 6713)",
        "question": "Divestment under RA 6713 means:",
        "options": [
            {
                "letter": "A",
                "text": "Holding onto business interests"
            },
            {
                "letter": "B",
                "text": "Voluntarily disposing of conflicting interests"
            },
            {
                "letter": "C",
                "text": "Buying more shares"
            },
            {
                "letter": "D",
                "text": "Avoiding disclosure"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Voluntarily disposing of conflicting interests",
        "solution": "Divest conflicting interests voluntarily."
    }
];


const genInfoPeaceQuestions = [
    {
        "id": 1,
        "topic": "Peace and Human Rights",
        "question": "Which international instrument first articulated a universal framework of human rights after World War II?",
        "options": [
            {
                "letter": "A",
                "text": "Geneva Conventions"
            },
            {
                "letter": "B",
                "text": "ICCPR"
            },
            {
                "letter": "C",
                "text": "UDHR"
            },
            {
                "letter": "D",
                "text": "ECHR"
            }
        ],
        "answer_letter": "C",
        "answer_text": "UDHR",
        "solution": "UDHR is the post-WWII universal framework."
    },
    {
        "id": 2,
        "topic": "Peace and Human Rights",
        "question": "The principle of non-discrimination requires states to:",
        "options": [
            {
                "letter": "A",
                "text": "Treat all persons equally in all circumstances"
            },
            {
                "letter": "B",
                "text": "Provide identical treatment for all cultures"
            },
            {
                "letter": "C",
                "text": "Respect all differences in law"
            },
            {
                "letter": "D",
                "text": "Ensure equal enjoyment of rights without unjust distinctions"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Ensure equal enjoyment of rights without unjust distinctions",
        "solution": "Equal enjoyment of rights without unjust distinctions."
    },
    {
        "id": 3,
        "topic": "Peace and Human Rights",
        "question": "Cultural relativism in human rights suggests that:",
        "options": [
            {
                "letter": "A",
                "text": "Human rights are absolute"
            },
            {
                "letter": "B",
                "text": "Rights vary based on cultural context"
            },
            {
                "letter": "C",
                "text": "Only Western nations uphold human rights"
            },
            {
                "letter": "D",
                "text": "Rights are not universal"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Rights vary based on cultural context",
        "solution": "Cultural context influences rights interpretation."
    },
    {
        "id": 4,
        "topic": "Peace and Human Rights",
        "question": "Which of the following is a civil and political right?",
        "options": [
            {
                "letter": "A",
                "text": "Right to education"
            },
            {
                "letter": "B",
                "text": "Right to a fair trial"
            },
            {
                "letter": "C",
                "text": "Right to employment"
            },
            {
                "letter": "D",
                "text": "Right to housing"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Right to a fair trial",
        "solution": "Fair trial is a civil and political right."
    },
    {
        "id": 5,
        "topic": "Peace and Human Rights",
        "question": "The Vienna Declaration and Programme of Action (1993) affirmed that:",
        "options": [
            {
                "letter": "A",
                "text": "All human rights are universal, indivisible, and interdependent"
            },
            {
                "letter": "B",
                "text": "Economic rights are optional"
            },
            {
                "letter": "C",
                "text": "Cultural rights override civil rights"
            },
            {
                "letter": "D",
                "text": "State sovereignty is absolute"
            }
        ],
        "answer_letter": "A",
        "answer_text": "All human rights are universal, indivisible, and interdependent",
        "solution": "Vienna affirmed universality, indivisibility, and interdependence of rights."
    },
    {
        "id": 6,
        "topic": "Peace and Human Rights",
        "question": "Positive obligations of states refer to:",
        "options": [
            {
                "letter": "A",
                "text": "Non-interference in citizens' lives"
            },
            {
                "letter": "B",
                "text": "Duties to actively protect rights"
            },
            {
                "letter": "C",
                "text": "Only to punish violators"
            },
            {
                "letter": "D",
                "text": "Maintaining borders"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Duties to actively protect rights",
        "solution": "Positive obligations mean active protection of rights."
    },
    {
        "id": 7,
        "topic": "Peace and Human Rights",
        "question": "Due process guarantees primarily protect against:",
        "options": [
            {
                "letter": "A",
                "text": "Social inequality"
            },
            {
                "letter": "B",
                "text": "Arbitrary detention"
            },
            {
                "letter": "C",
                "text": "Unequal employment"
            },
            {
                "letter": "D",
                "text": "Educational gaps"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Arbitrary detention",
        "solution": "Due process protects against arbitrary detention."
    },
    {
        "id": 8,
        "topic": "Peace and Human Rights",
        "question": "The Right to Life is recognized in:",
        "options": [
            {
                "letter": "A",
                "text": "Only local laws"
            },
            {
                "letter": "B",
                "text": "All major human rights treaties"
            },
            {
                "letter": "C",
                "text": "Only in post-1990 treaties"
            },
            {
                "letter": "D",
                "text": "Only in regional contexts"
            }
        ],
        "answer_letter": "B",
        "answer_text": "All major human rights treaties",
        "solution": "Right to life is recognized in all major human rights treaties."
    },
    {
        "id": 9,
        "topic": "Peace and Human Rights",
        "question": "An example of a third-generation human right is:",
        "options": [
            {
                "letter": "A",
                "text": "Right to fair trial"
            },
            {
                "letter": "B",
                "text": "Right to participate in government"
            },
            {
                "letter": "C",
                "text": "Right to peace"
            },
            {
                "letter": "D",
                "text": "Right to security of person"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Right to peace",
        "solution": "Third-generation rights include collective rights like peace."
    },
    {
        "id": 10,
        "topic": "Peace and Human Rights",
        "question": "Human rights can be derogated under ICCPR only during:",
        "options": [
            {
                "letter": "A",
                "text": "Wartime only"
            },
            {
                "letter": "B",
                "text": "Public emergency threatening life of the nation"
            },
            {
                "letter": "C",
                "text": "Economic crisis"
            },
            {
                "letter": "D",
                "text": "Social unrest\n\n---\n\n## 11\u201320: Peace & Conflict Studies"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Public emergency threatening life of the nation",
        "solution": "Derogation only during a public emergency threatening the nation."
    },
    {
        "id": 11,
        "topic": "Peace and Human Rights",
        "question": "The Just War Theory originated in:",
        "options": [
            {
                "letter": "A",
                "text": "Islamic jurisprudence"
            },
            {
                "letter": "B",
                "text": "Ancient Greek philosophy"
            },
            {
                "letter": "C",
                "text": "Roman law and Christian theology"
            },
            {
                "letter": "D",
                "text": "Modern international law"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Roman law and Christian theology",
        "solution": "Just War Theory originated from Roman law and Christian theology."
    },
    {
        "id": 12,
        "topic": "Peace and Human Rights",
        "question": "Structural violence refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Direct physical harm"
            },
            {
                "letter": "B",
                "text": "Social systems that harm by inequality"
            },
            {
                "letter": "C",
                "text": "War only"
            },
            {
                "letter": "D",
                "text": "Criminal acts only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Social systems that harm by inequality",
        "solution": "Structural violence refers to systems that harm through inequality."
    },
    {
        "id": 13,
        "topic": "Peace and Human Rights",
        "question": "Which concept focuses on root causes of conflict rather than symptoms?",
        "options": [
            {
                "letter": "A",
                "text": "Conflict management"
            },
            {
                "letter": "B",
                "text": "Conflict transformation"
            },
            {
                "letter": "C",
                "text": "Conflict avoidance"
            },
            {
                "letter": "D",
                "text": "Conflict suppression"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Conflict transformation",
        "solution": "Conflict transformation addresses root causes."
    },
    {
        "id": 14,
        "topic": "Peace and Human Rights",
        "question": "Sustainable peace emphasizes:",
        "options": [
            {
                "letter": "A",
                "text": "Ceasefire"
            },
            {
                "letter": "B",
                "text": "Absence of war only"
            },
            {
                "letter": "C",
                "text": "Social justice, reconciliation, and structural change"
            },
            {
                "letter": "D",
                "text": "Military victory"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Social justice, reconciliation, and structural change",
        "solution": "Sustainable peace involves justice and structural change."
    },
    {
        "id": 15,
        "topic": "Peace and Human Rights",
        "question": "Track II diplomacy is:",
        "options": [
            {
                "letter": "A",
                "text": "Official state negotiation"
            },
            {
                "letter": "B",
                "text": "Unofficial, informal dialogue among non-state actors"
            },
            {
                "letter": "C",
                "text": "Military fostering peace"
            },
            {
                "letter": "D",
                "text": "Economic sanctioning"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Unofficial, informal dialogue among non-state actors",
        "solution": "Track II diplomacy is unofficial and informal."
    },
    {
        "id": 16,
        "topic": "Peace and Human Rights",
        "question": "A negative peace means:",
        "options": [
            {
                "letter": "A",
                "text": "Absence of direct violence"
            },
            {
                "letter": "B",
                "text": "Peace with social justice"
            },
            {
                "letter": "C",
                "text": "A treaty signed"
            },
            {
                "letter": "D",
                "text": "Total reconciliation"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Absence of direct violence",
        "solution": "Negative peace is the absence of violence."
    },
    {
        "id": 17,
        "topic": "Peace and Human Rights",
        "question": "Peacebuilding primarily occurs:",
        "options": [
            {
                "letter": "A",
                "text": "Before conflict"
            },
            {
                "letter": "B",
                "text": "During active combat"
            },
            {
                "letter": "C",
                "text": "After conflict to address root causes"
            },
            {
                "letter": "D",
                "text": "Only in UN missions"
            }
        ],
        "answer_letter": "C",
        "answer_text": "After conflict to address root causes",
        "solution": "Peacebuilding occurs after conflict to address causes."
    },
    {
        "id": 18,
        "topic": "Peace and Human Rights",
        "question": "The Responsibility to Protect (R2P) doctrine emerged in response to:",
        "options": [
            {
                "letter": "A",
                "text": "Economic crises"
            },
            {
                "letter": "B",
                "text": "Genocide and mass atrocities"
            },
            {
                "letter": "C",
                "text": "Trade disputes"
            },
            {
                "letter": "D",
                "text": "Maritime issues"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Genocide and mass atrocities",
        "solution": "R2P responds to genocide and mass atrocities."
    },
    {
        "id": 19,
        "topic": "Peace and Human Rights",
        "question": "Peace education aims to develop:",
        "options": [
            {
                "letter": "A",
                "text": "Only negotiation skills"
            },
            {
                "letter": "B",
                "text": "Attitudes, knowledge, and skills for peaceful conflict resolution"
            },
            {
                "letter": "C",
                "text": "Military strategies"
            },
            {
                "letter": "D",
                "text": "Cultural isolation"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Attitudes, knowledge, and skills for peaceful conflict resolution",
        "solution": "Peace education develops attitudes, knowledge, and skills for peace."
    },
    {
        "id": 20,
        "topic": "Peace and Human Rights",
        "question": "The Human Security paradigm prioritizes:",
        "options": [
            {
                "letter": "A",
                "text": "State borders"
            },
            {
                "letter": "B",
                "text": "Protection of individuals from threats"
            },
            {
                "letter": "C",
                "text": "Military dominance"
            },
            {
                "letter": "D",
                "text": "Economic interests of elites\n\n---\n\n## 21\u201330: Human Rights Violations & Accountability"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Protection of individuals from threats",
        "solution": "Human security focuses on protecting individuals."
    },
    {
        "id": 21,
        "topic": "Peace and Human Rights",
        "question": "The principle of complementarity in ICC means:",
        "options": [
            {
                "letter": "A",
                "text": "ICC overrides all national courts"
            },
            {
                "letter": "B",
                "text": "ICC acts only when states are unwilling or unable to prosecute"
            },
            {
                "letter": "C",
                "text": "ICC prosecutes all suspects automatically"
            },
            {
                "letter": "D",
                "text": "National courts always defer"
            }
        ],
        "answer_letter": "B",
        "answer_text": "ICC acts only when states are unwilling or unable to prosecute",
        "solution": "Complementarity means the ICC acts when states cannot or will not prosecute."
    },
    {
        "id": 22,
        "topic": "Peace and Human Rights",
        "question": "Crimes against humanity require:",
        "options": [
            {
                "letter": "A",
                "text": "War only"
            },
            {
                "letter": "B",
                "text": "Widespread or systematic attack against civilians"
            },
            {
                "letter": "C",
                "text": "Single incident"
            },
            {
                "letter": "D",
                "text": "Economic harm only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Widespread or systematic attack against civilians",
        "solution": "Crimes against humanity require a widespread or systematic attack on civilians."
    },
    {
        "id": 23,
        "topic": "Peace and Human Rights",
        "question": "Genocide as defined under the Genocide Convention involves:",
        "options": [
            {
                "letter": "A",
                "text": "Random killings"
            },
            {
                "letter": "B",
                "text": "Acts committed with intent to destroy a national, ethnic, racial, or religious group"
            },
            {
                "letter": "C",
                "text": "Property destruction only"
            },
            {
                "letter": "D",
                "text": "Political disputes"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Acts committed with intent to destroy a national, ethnic, racial, or religious group",
        "solution": "Genocide involves intent to destroy a protected group."
    },
    {
        "id": 24,
        "topic": "Peace and Human Rights",
        "question": "Universal jurisdiction allows states to prosecute:",
        "options": [
            {
                "letter": "A",
                "text": "Only their citizens"
            },
            {
                "letter": "B",
                "text": "Certain international crimes regardless of where committed"
            },
            {
                "letter": "C",
                "text": "Traffic offenses"
            },
            {
                "letter": "D",
                "text": "Local civil disputes"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Certain international crimes regardless of where committed",
        "solution": "Universal jurisdiction applies to serious international crimes."
    },
    {
        "id": 25,
        "topic": "Peace and Human Rights",
        "question": "Torture is prohibited without exception in:",
        "options": [
            {
                "letter": "A",
                "text": "ICCPR"
            },
            {
                "letter": "B",
                "text": "Only after declaring emergency"
            },
            {
                "letter": "C",
                "text": "Only some nations"
            },
            {
                "letter": "D",
                "text": "Only at borders"
            }
        ],
        "answer_letter": "A",
        "answer_text": "ICCPR",
        "solution": "Torture is absolutely prohibited."
    },
    {
        "id": 26,
        "topic": "Peace and Human Rights",
        "question": "A remedy for human rights violation must be:",
        "options": [
            {
                "letter": "A",
                "text": "Punitive only"
            },
            {
                "letter": "B",
                "text": "Effective, accessible, and timely"
            },
            {
                "letter": "C",
                "text": "Expensive"
            },
            {
                "letter": "D",
                "text": "Limited to appeals"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Effective, accessible, and timely",
        "solution": "Remedies must be effective, accessible, and timely."
    },
    {
        "id": 27,
        "topic": "Peace and Human Rights",
        "question": "The phrase \u201cno impunity\u201d means:",
        "options": [
            {
                "letter": "A",
                "text": "No consequences for violations"
            },
            {
                "letter": "B",
                "text": "Violators will face accountability"
            },
            {
                "letter": "C",
                "text": "Only civil sanction"
            },
            {
                "letter": "D",
                "text": "Secret trials"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Violators will face accountability",
        "solution": "\u201cNo impunity\u201d means accountability for violators."
    },
    {
        "id": 28,
        "topic": "Peace and Human Rights",
        "question": "A safe third country principle is used in:",
        "options": [
            {
                "letter": "A",
                "text": "Trade law"
            },
            {
                "letter": "B",
                "text": "Asylum law processing"
            },
            {
                "letter": "C",
                "text": "Maritime law"
            },
            {
                "letter": "D",
                "text": "Electoral law"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Asylum law processing",
        "solution": "Safe third country principle applies in asylum processing."
    },
    {
        "id": 29,
        "topic": "Peace and Human Rights",
        "question": "Non-refoulement means:",
        "options": [
            {
                "letter": "A",
                "text": "Returning refugees to harm"
            },
            {
                "letter": "B",
                "text": "Forcing citizenship"
            },
            {
                "letter": "C",
                "text": "Not expelling or returning refugees where life is threatened"
            },
            {
                "letter": "D",
                "text": "Deportation on demand"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Not expelling or returning refugees where life is threatened",
        "solution": "Non-refoulement prohibits returning people to harm."
    },
    {
        "id": 30,
        "topic": "Peace and Human Rights",
        "question": "The Torture Victims Protection Act (TVPA) allows suits in US courts for:",
        "options": [
            {
                "letter": "A",
                "text": "Traffic violations"
            },
            {
                "letter": "B",
                "text": "Torture and extrajudicial killing by foreign officials"
            },
            {
                "letter": "C",
                "text": "Contract disputes"
            },
            {
                "letter": "D",
                "text": "Intellectual property\n\n---\n\n## 31\u201340: Special Human Rights Issues"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Torture and extrajudicial killing by foreign officials",
        "solution": "TVPA allows suits for torture and extrajudicial killings."
    },
    {
        "id": 31,
        "topic": "Peace and Human Rights",
        "question": "Economic, Social, and Cultural Rights (ESCR) include:",
        "options": [
            {
                "letter": "A",
                "text": "Right to fair trial"
            },
            {
                "letter": "B",
                "text": "Right to health"
            },
            {
                "letter": "C",
                "text": "Right to vote only"
            },
            {
                "letter": "D",
                "text": "All civil rights"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Right to health",
        "solution": "Right to health is an ESCR."
    },
    {
        "id": 32,
        "topic": "Peace and Human Rights",
        "question": "The ICESCR obligates states to achieve rights:",
        "options": [
            {
                "letter": "A",
                "text": "Immediately"
            },
            {
                "letter": "B",
                "text": "Progressive realization"
            },
            {
                "letter": "C",
                "text": "Never"
            },
            {
                "letter": "D",
                "text": "On request"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Progressive realization",
        "solution": "ICESCR requires progressive realization."
    },
    {
        "id": 33,
        "topic": "Peace and Human Rights",
        "question": "The rights of indigenous peoples are protected by:",
        "options": [
            {
                "letter": "A",
                "text": "ICCPR only"
            },
            {
                "letter": "B",
                "text": "UN Declaration on the Rights of Indigenous Peoples"
            },
            {
                "letter": "C",
                "text": "Trade treaties"
            },
            {
                "letter": "D",
                "text": "Maritime law"
            }
        ],
        "answer_letter": "B",
        "answer_text": "UN Declaration on the Rights of Indigenous Peoples",
        "solution": "UN Declaration protects indigenous peoples\u2019 rights."
    },
    {
        "id": 34,
        "topic": "Peace and Human Rights",
        "question": "Gender mainstreaming requires integration of gender perspective in:",
        "options": [
            {
                "letter": "A",
                "text": "All policies and programs"
            },
            {
                "letter": "B",
                "text": "Only women-focused programs"
            },
            {
                "letter": "C",
                "text": "Military planning only"
            },
            {
                "letter": "D",
                "text": "Urban planning only"
            }
        ],
        "answer_letter": "A",
        "answer_text": "All policies and programs",
        "solution": "Gender mainstreaming applies to all policy areas."
    },
    {
        "id": 35,
        "topic": "Peace and Human Rights",
        "question": "Children\u2019s rights are codified in:",
        "options": [
            {
                "letter": "A",
                "text": "CRC"
            },
            {
                "letter": "B",
                "text": "UDHR only"
            },
            {
                "letter": "C",
                "text": "ICCPR exclusively"
            },
            {
                "letter": "D",
                "text": "Labor codes"
            }
        ],
        "answer_letter": "A",
        "answer_text": "CRC",
        "solution": "CRC is the core children\u2019s rights treaty."
    },
    {
        "id": 36,
        "topic": "Peace and Human Rights",
        "question": "Disability rights are reinforced by:",
        "options": [
            {
                "letter": "A",
                "text": "No specific treaty"
            },
            {
                "letter": "B",
                "text": "CRPD"
            },
            {
                "letter": "C",
                "text": "Trade agreements"
            },
            {
                "letter": "D",
                "text": "Bilateral pacts"
            }
        ],
        "answer_letter": "B",
        "answer_text": "CRPD",
        "solution": "CRPD protects disability rights."
    },
    {
        "id": 37,
        "topic": "Peace and Human Rights",
        "question": "Right to development emphasizes:",
        "options": [
            {
                "letter": "A",
                "text": "Individual achievement only"
            },
            {
                "letter": "B",
                "text": "Economic rights along with cultural, social, political rights"
            },
            {
                "letter": "C",
                "text": "Military growth"
            },
            {
                "letter": "D",
                "text": "Infrastructure spending only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Economic rights along with cultural, social, political rights",
        "solution": "Right to development integrates all rights."
    },
    {
        "id": 38,
        "topic": "Peace and Human Rights",
        "question": "Environmental rights are recognized as:",
        "options": [
            {
                "letter": "A",
                "text": "Non-existent"
            },
            {
                "letter": "B",
                "text": "Emerging human rights"
            },
            {
                "letter": "C",
                "text": "Only economic issues"
            },
            {
                "letter": "D",
                "text": "Exclusive to corporations"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Emerging human rights",
        "solution": "Environmental rights are emerging human rights."
    },
    {
        "id": 39,
        "topic": "Peace and Human Rights",
        "question": "Refugee status is defined under:",
        "options": [
            {
                "letter": "A",
                "text": "UNCLOS"
            },
            {
                "letter": "B",
                "text": "1951 Refugee Convention"
            },
            {
                "letter": "C",
                "text": "NAFTA"
            },
            {
                "letter": "D",
                "text": "ICC"
            }
        ],
        "answer_letter": "B",
        "answer_text": "1951 Refugee Convention",
        "solution": "Refugee status is defined in the 1951 Refugee Convention."
    },
    {
        "id": 40,
        "topic": "Peace and Human Rights",
        "question": "Trafficking in persons is distinct from smuggling because:",
        "options": [
            {
                "letter": "A",
                "text": "Smuggling is always international"
            },
            {
                "letter": "B",
                "text": "Trafficking involves exploitation of the person"
            },
            {
                "letter": "C",
                "text": "Smuggling is harmless"
            },
            {
                "letter": "D",
                "text": "Trafficking is only voluntary\n\n---\n\n## 41\u201350: Contemporary Concepts in Peace & Human Rights"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Trafficking involves exploitation of the person",
        "solution": "Trafficking involves exploitation."
    },
    {
        "id": 41,
        "topic": "Peace and Human Rights",
        "question": "Peace journalism contrasts with traditional media by:",
        "options": [
            {
                "letter": "A",
                "text": "Avoiding conflict coverage"
            },
            {
                "letter": "B",
                "text": "Reporting that emphasizes solutions and reduces polarization"
            },
            {
                "letter": "C",
                "text": "Only entertainment news"
            },
            {
                "letter": "D",
                "text": "Nationalist narratives"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Reporting that emphasizes solutions and reduces polarization",
        "solution": "Peace journalism focuses on solutions."
    },
    {
        "id": 42,
        "topic": "Peace and Human Rights",
        "question": "Restorative justice focuses on:",
        "options": [
            {
                "letter": "A",
                "text": "Punishment only"
            },
            {
                "letter": "B",
                "text": "Repairing harm and reconciling relationships"
            },
            {
                "letter": "C",
                "text": "Revenge"
            },
            {
                "letter": "D",
                "text": "Incarceration exclusively"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Repairing harm and reconciling relationships",
        "solution": "Restorative justice repairs harm and relationships."
    },
    {
        "id": 43,
        "topic": "Peace and Human Rights",
        "question": "Transitional justice includes:",
        "options": [
            {
                "letter": "A",
                "text": "Economic reform only"
            },
            {
                "letter": "B",
                "text": "Measures like truth commissions, trials, reparations"
            },
            {
                "letter": "C",
                "text": "Electoral processes only"
            },
            {
                "letter": "D",
                "text": "Immigration control"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Measures like truth commissions, trials, reparations",
        "solution": "Transitional justice includes truth commissions, trials, and reparations."
    },
    {
        "id": 44,
        "topic": "Peace and Human Rights",
        "question": "Human rights defenders are protected under:",
        "options": [
            {
                "letter": "A",
                "text": "Domestic law only"
            },
            {
                "letter": "B",
                "text": "UN Declaration on Human Rights Defenders"
            },
            {
                "letter": "C",
                "text": "Trade law"
            },
            {
                "letter": "D",
                "text": "Criminal codes only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "UN Declaration on Human Rights Defenders",
        "solution": "UN Declaration protects human rights defenders."
    },
    {
        "id": 45,
        "topic": "Peace and Human Rights",
        "question": "A peace dividend refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Increased warfare spending"
            },
            {
                "letter": "B",
                "text": "Economic gains from peace after conflict"
            },
            {
                "letter": "C",
                "text": "Foreign debt"
            },
            {
                "letter": "D",
                "text": "Military recruitment"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Economic gains from peace after conflict",
        "solution": "Peace dividend means economic gains from peace."
    },
    {
        "id": 46,
        "topic": "Peace and Human Rights",
        "question": "Nonviolent resistance is strategy associated with:",
        "options": [
            {
                "letter": "A",
                "text": "Armed struggle"
            },
            {
                "letter": "B",
                "text": "Gandhi and MLK"
            },
            {
                "letter": "C",
                "text": "Economic sanctions only"
            },
            {
                "letter": "D",
                "text": "Military coups"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Gandhi and MLK",
        "solution": "Nonviolence is associated with Gandhi and Martin Luther King Jr."
    },
    {
        "id": 47,
        "topic": "Peace and Human Rights",
        "question": "The Arab Spring is an example of:",
        "options": [
            {
                "letter": "A",
                "text": "Peace treaty negotiation"
            },
            {
                "letter": "B",
                "text": "Popular uprisings demanding rights and reforms"
            },
            {
                "letter": "C",
                "text": "Trade agreements"
            },
            {
                "letter": "D",
                "text": "Maritime conflict"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Popular uprisings demanding rights and reforms",
        "solution": "Arab Spring consisted of popular uprisings."
    },
    {
        "id": 48,
        "topic": "Peace and Human Rights",
        "question": "Digital rights in human rights context include:",
        "options": [
            {
                "letter": "A",
                "text": "Right to access and privacy online"
            },
            {
                "letter": "B",
                "text": "Only speed of internet"
            },
            {
                "letter": "C",
                "text": "Data ownership by corporations"
            },
            {
                "letter": "D",
                "text": "Trade restrictions"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Right to access and privacy online",
        "solution": "Digital rights include access and privacy."
    },
    {
        "id": 49,
        "topic": "Peace and Human Rights",
        "question": "Humanitarian intervention is justified when:",
        "options": [
            {
                "letter": "A",
                "text": "Economic loss is minimal"
            },
            {
                "letter": "B",
                "text": "Massive human rights violations occur and no other means mitigate"
            },
            {
                "letter": "C",
                "text": "National interest only"
            },
            {
                "letter": "D",
                "text": "Trade disputes arise"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Massive human rights violations occur and no other means mitigate",
        "solution": "Humanitarian intervention may be justified for grave human rights violations."
    },
    {
        "id": 50,
        "topic": "Peace and Human Rights",
        "question": "Ethnic cleansing differs from genocide primarily in:",
        "options": [
            {
                "letter": "A",
                "text": "Scope of violence"
            },
            {
                "letter": "B",
                "text": "Intent to remove a group from territory"
            },
            {
                "letter": "C",
                "text": "Economic cost"
            },
            {
                "letter": "D",
                "text": "Peace treaty status\n\n\n# General Information"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Intent to remove a group from territory",
        "solution": "Ethnic cleansing aims to remove a group from a territory."
    }
];


const genInfoEnvironmentQuestions = [
    {
        "id": 1,
        "topic": "Environment Management",
        "question": "Sustainable development as defined in the Brundtland Report primarily emphasizes:",
        "options": [
            {
                "letter": "A",
                "text": "Maximizing economic output regardless of environmental cost"
            },
            {
                "letter": "B",
                "text": "Meeting present needs without compromising future generations\u2019 ability to meet theirs"
            },
            {
                "letter": "C",
                "text": "Prioritizing short-term development goals"
            },
            {
                "letter": "D",
                "text": "Relying solely on technological fixes"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Meeting present needs without compromising future generations\u2019 ability to meet theirs",
        "solution": "Sustainable development defined by Brundtland emphasizes meeting present needs without compromising future generations."
    },
    {
        "id": 2,
        "topic": "Environment Management",
        "question": "The precautionary principle in environmental policy means:",
        "options": [
            {
                "letter": "A",
                "text": "Delay action until full scientific certainty exists"
            },
            {
                "letter": "B",
                "text": "Take preventive action in the face of uncertainty to avoid serious harm"
            },
            {
                "letter": "C",
                "text": "Protect only economically valuable resources"
            },
            {
                "letter": "D",
                "text": "Focus on economic impacts before environmental risks"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Take preventive action in the face of uncertainty to avoid serious harm",
        "solution": "The precautionary principle means precaution when risk is uncertain but serious."
    },
    {
        "id": 3,
        "topic": "Environment Management",
        "question": "Ecosystem services include all EXCEPT:",
        "options": [
            {
                "letter": "A",
                "text": "Supporting nutrient cycling"
            },
            {
                "letter": "B",
                "text": "Provision of raw materials"
            },
            {
                "letter": "C",
                "text": "Climate regulation"
            },
            {
                "letter": "D",
                "text": "Maximizing deforestation"
            }
        ],
        "answer_letter": "D",
        "answer_text": "Maximizing deforestation",
        "solution": "Maximizing deforestation isn't an ecosystem service; services support life and well-being."
    },
    {
        "id": 4,
        "topic": "Environment Management",
        "question": "The tragedy of the commons illustrates that:",
        "options": [
            {
                "letter": "A",
                "text": "Common property always leads to economic prosperity"
            },
            {
                "letter": "B",
                "text": "Shared resources are overexploited without regulation"
            },
            {
                "letter": "C",
                "text": "Private property always fails"
            },
            {
                "letter": "D",
                "text": "Unlimited resource use never causes depletion"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Shared resources are overexploited without regulation",
        "solution": "Shared resources are overexploited without regulation in the tragedy of the commons."
    },
    {
        "id": 5,
        "topic": "Environment Management",
        "question": "Greenwashing refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Genuine sustainable practices"
            },
            {
                "letter": "B",
                "text": "Misleading environmental claims by companies"
            },
            {
                "letter": "C",
                "text": "Strict regulatory compliance"
            },
            {
                "letter": "D",
                "text": "Scientific environmental reporting"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Misleading environmental claims by companies",
        "solution": "Greenwashing misleads stakeholders about genuine environmental practices."
    },
    {
        "id": 6,
        "topic": "Environment Management",
        "question": "The carrying capacity of an environment refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Maximum population size the environment can sustain indefinitely"
            },
            {
                "letter": "B",
                "text": "Maximum vehicle load in protected areas"
            },
            {
                "letter": "C",
                "text": "Total biomass produced in a year"
            },
            {
                "letter": "D",
                "text": "Level of economic activity in an ecosystem"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Maximum population size the environment can sustain indefinitely",
        "solution": "Carrying capacity is the maximum population an environment can sustain long-term."
    },
    {
        "id": 7,
        "topic": "Environment Management",
        "question": "Anthropogenic climate change is driven mainly by:",
        "options": [
            {
                "letter": "A",
                "text": "Volcanic eruptions"
            },
            {
                "letter": "B",
                "text": "Natural solar cycles exclusively"
            },
            {
                "letter": "C",
                "text": "Human emissions of greenhouse gases"
            },
            {
                "letter": "D",
                "text": "Ocean tidal patterns"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Human emissions of greenhouse gases",
        "solution": "Human-driven (anthropogenic) greenhouse gas emissions drive climate change."
    },
    {
        "id": 8,
        "topic": "Environment Management",
        "question": "Biodiversity hotspots are areas with:",
        "options": [
            {
                "letter": "A",
                "text": "High species richness and significant threat levels"
            },
            {
                "letter": "B",
                "text": "Only one dominant species"
            },
            {
                "letter": "C",
                "text": "Unchanging, pristine ecosystems"
            },
            {
                "letter": "D",
                "text": "Minimal human impact"
            }
        ],
        "answer_letter": "A",
        "answer_text": "High species richness and significant threat levels",
        "solution": "Biodiversity hotspots are rich in species and threatened."
    },
    {
        "id": 9,
        "topic": "Environment Management",
        "question": "The polluter pays principle requires that:",
        "options": [
            {
                "letter": "A",
                "text": "Citizens pay for pollution cleanup"
            },
            {
                "letter": "B",
                "text": "Polluters bear the cost of managing pollution to prevent environmental harm"
            },
            {
                "letter": "C",
                "text": "Governments subsidize pollution control for industries"
            },
            {
                "letter": "D",
                "text": "Pollution remains the cheapest option"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Polluters bear the cost of managing pollution to prevent environmental harm",
        "solution": "The polluter pays principle holds polluters financially responsible."
    },
    {
        "id": 10,
        "topic": "Environment Management",
        "question": "Environmental justice primarily focuses on:",
        "options": [
            {
                "letter": "A",
                "text": "Equitable distribution of environmental benefits and burdens"
            },
            {
                "letter": "B",
                "text": "Scientific classification of species"
            },
            {
                "letter": "C",
                "text": "Economic competitiveness of corporations"
            },
            {
                "letter": "D",
                "text": "Infrastructure development"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Equitable distribution of environmental benefits and burdens",
        "solution": "Environmental justice focuses on fair distribution of burdens and benefits."
    },
    {
        "id": 11,
        "topic": "Environment Management",
        "question": "Point source pollution refers to contaminants from:",
        "options": [
            {
                "letter": "A",
                "text": "Diffuse sources like urban runoff"
            },
            {
                "letter": "B",
                "text": "A single identifiable source such as a factory pipe"
            },
            {
                "letter": "C",
                "text": "Atmospheric deposition only"
            },
            {
                "letter": "D",
                "text": "Natural background levels"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A single identifiable source such as a factory pipe",
        "solution": "Point source pollution comes from a single identifiable outlet."
    },
    {
        "id": 12,
        "topic": "Environment Management",
        "question": "Eutrophication in aquatic systems is typically caused by:",
        "options": [
            {
                "letter": "A",
                "text": "Nutrient overenrichment from fertilizers"
            },
            {
                "letter": "B",
                "text": "Lack of sunlight"
            },
            {
                "letter": "C",
                "text": "Low oxygen inputs"
            },
            {
                "letter": "D",
                "text": "Excessive salinity"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Nutrient overenrichment from fertilizers",
        "solution": "Eutrophication is nutrient enrichment causing algal blooms."
    },
    {
        "id": 13,
        "topic": "Environment Management",
        "question": "Persistent Organic Pollutants (POPs) are problematic because they:",
        "options": [
            {
                "letter": "A",
                "text": "Break down rapidly"
            },
            {
                "letter": "B",
                "text": "Bioaccumulate and persist in ecosystems"
            },
            {
                "letter": "C",
                "text": "Are always water soluble"
            },
            {
                "letter": "D",
                "text": "Only affect abiotic components"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Bioaccumulate and persist in ecosystems",
        "solution": "POPs bioaccumulate and persist."
    },
    {
        "id": 14,
        "topic": "Environment Management",
        "question": "The most effective landfill practice to prevent groundwater contamination is:",
        "options": [
            {
                "letter": "A",
                "text": "Open dumping"
            },
            {
                "letter": "B",
                "text": "Lining with impermeable liners and leachate collection"
            },
            {
                "letter": "C",
                "text": "Burning waste on site"
            },
            {
                "letter": "D",
                "text": "Leaving waste uncovered"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Lining with impermeable liners and leachate collection",
        "solution": "Proper landfills use liners to protect groundwater."
    },
    {
        "id": 15,
        "topic": "Environment Management",
        "question": "Incineration with energy recovery primarily reduces:",
        "options": [
            {
                "letter": "A",
                "text": "Air emissions"
            },
            {
                "letter": "B",
                "text": "Waste volume but may create air pollutants if not controlled"
            },
            {
                "letter": "C",
                "text": "Energy use"
            },
            {
                "letter": "D",
                "text": "Recycling rates"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Waste volume but may create air pollutants if not controlled",
        "solution": "Incinerators reduce volume but can emit pollutants if not controlled."
    },
    {
        "id": 16,
        "topic": "Environment Management",
        "question": "Secondary air pollutants are formed:",
        "options": [
            {
                "letter": "A",
                "text": "Directly emitted into atmosphere"
            },
            {
                "letter": "B",
                "text": "Through chemical reactions in the air"
            },
            {
                "letter": "C",
                "text": "Only during forest fires"
            },
            {
                "letter": "D",
                "text": "At the surface of oceans"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Through chemical reactions in the air",
        "solution": "Secondary air pollutants form via atmospheric chemical reactions."
    },
    {
        "id": 17,
        "topic": "Environment Management",
        "question": "Ozone at ground level is:",
        "options": [
            {
                "letter": "A",
                "text": "Beneficial protective layer"
            },
            {
                "letter": "B",
                "text": "A harmful pollutant affecting respiratory systems"
            },
            {
                "letter": "C",
                "text": "Only present in polar regions"
            },
            {
                "letter": "D",
                "text": "Created by chlorofluorocarbons exclusively"
            }
        ],
        "answer_letter": "B",
        "answer_text": "A harmful pollutant affecting respiratory systems",
        "solution": "Ground-level ozone is a harmful pollutant."
    },
    {
        "id": 18,
        "topic": "Environment Management",
        "question": "Thermal pollution usually refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Excessive heat release into water bodies, reducing dissolved oxygen"
            },
            {
                "letter": "B",
                "text": "Acid rain"
            },
            {
                "letter": "C",
                "text": "Radioactive contamination"
            },
            {
                "letter": "D",
                "text": "Soil erosion"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Excessive heat release into water bodies, reducing dissolved oxygen",
        "solution": "Thermal pollution adds heat, lowering dissolved oxygen."
    },
    {
        "id": 19,
        "topic": "Environment Management",
        "question": "Noise pollution is most strongly associated with:",
        "options": [
            {
                "letter": "A",
                "text": "Forest ecosystems"
            },
            {
                "letter": "B",
                "text": "Urban and industrial activities"
            },
            {
                "letter": "C",
                "text": "Dissolved oxygen content"
            },
            {
                "letter": "D",
                "text": "Arid deserts only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Urban and industrial activities",
        "solution": "Noise pollution is urban/industrial."
    },
    {
        "id": 20,
        "topic": "Environment Management",
        "question": "Biodegradable waste refers to materials that:",
        "options": [
            {
                "letter": "A",
                "text": "Cannot be broken down by natural processes"
            },
            {
                "letter": "B",
                "text": "Can be decomposed by biological organisms"
            },
            {
                "letter": "C",
                "text": "Always cause toxic runoff"
            },
            {
                "letter": "D",
                "text": "Only exist in industrial waste"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Can be decomposed by biological organisms",
        "solution": "Biodegradable waste can be decomposed biologically."
    },
    {
        "id": 21,
        "topic": "Environment Management",
        "question": "Renewable resources can be sustainably used because:",
        "options": [
            {
                "letter": "A",
                "text": "Their supply is unlimited regardless of use"
            },
            {
                "letter": "B",
                "text": "They can regenerate naturally over time"
            },
            {
                "letter": "C",
                "text": "They never require management"
            },
            {
                "letter": "D",
                "text": "They always produce pollution"
            }
        ],
        "answer_letter": "B",
        "answer_text": "They can regenerate naturally over time",
        "solution": "Renewable resources regenerate naturally."
    },
    {
        "id": 22,
        "topic": "Environment Management",
        "question": "The primary cause of deforestation in tropical regions is:",
        "options": [
            {
                "letter": "A",
                "text": "Controlled scientific forestry"
            },
            {
                "letter": "B",
                "text": "Conversion of forests to agriculture and logging"
            },
            {
                "letter": "C",
                "text": "Urban planting"
            },
            {
                "letter": "D",
                "text": "Industrial fishing"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Conversion of forests to agriculture and logging",
        "solution": "Deforestation is driven by agriculture and logging."
    },
    {
        "id": 23,
        "topic": "Environment Management",
        "question": "Watershed management aims to:",
        "options": [
            {
                "letter": "A",
                "text": "Increase downstream flooding"
            },
            {
                "letter": "B",
                "text": "Conserve soil and water within a drainage area"
            },
            {
                "letter": "C",
                "text": "Promote building over riverbanks"
            },
            {
                "letter": "D",
                "text": "Reduce vegetation cover"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Conserve soil and water within a drainage area",
        "solution": "Watershed management conserves soil and water in a catchment."
    },
    {
        "id": 24,
        "topic": "Environment Management",
        "question": "The Nitrogen cycle is essential because nitrogen is required for:",
        "options": [
            {
                "letter": "A",
                "text": "Geological rock formation"
            },
            {
                "letter": "B",
                "text": "DNA and protein synthesis in living organisms"
            },
            {
                "letter": "C",
                "text": "Only air quality"
            },
            {
                "letter": "D",
                "text": "Landscape aesthetics"
            }
        ],
        "answer_letter": "B",
        "answer_text": "DNA and protein synthesis in living organisms",
        "solution": "Nitrogen is essential for proteins and DNA."
    },
    {
        "id": 25,
        "topic": "Environment Management",
        "question": "Overfishing impacts marine ecosystems by:",
        "options": [
            {
                "letter": "A",
                "text": "Increasing fish biomass"
            },
            {
                "letter": "B",
                "text": "Altering food webs and reducing population resilience"
            },
            {
                "letter": "C",
                "text": "Only affecting deep-sea trenches"
            },
            {
                "letter": "D",
                "text": "Improving water quality"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Altering food webs and reducing population resilience",
        "solution": "Overfishing alters food webs and reduces resilience."
    },
    {
        "id": 26,
        "topic": "Environment Management",
        "question": "The primary cause of coral bleaching is:",
        "options": [
            {
                "letter": "A",
                "text": "Increased ocean temperature and stress"
            },
            {
                "letter": "B",
                "text": "Sedimentation only"
            },
            {
                "letter": "C",
                "text": "Overfishing exclusively"
            },
            {
                "letter": "D",
                "text": "Lower salinity only"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Increased ocean temperature and stress",
        "solution": "Coral bleaching is driven by thermal stress."
    },
    {
        "id": 27,
        "topic": "Environment Management",
        "question": "Wetlands are crucial because they:",
        "options": [
            {
                "letter": "A",
                "text": "Store carbon and support biodiversity"
            },
            {
                "letter": "B",
                "text": "Have no ecological value"
            },
            {
                "letter": "C",
                "text": "Only serve for recreation"
            },
            {
                "letter": "D",
                "text": "Are barren lands"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Store carbon and support biodiversity",
        "solution": "Wetlands store carbon and support high biodiversity."
    },
    {
        "id": 28,
        "topic": "Environment Management",
        "question": "Invasive alien species cause harm by:",
        "options": [
            {
                "letter": "A",
                "text": "Supporting native biodiversity"
            },
            {
                "letter": "B",
                "text": "Competing with and displacing native species"
            },
            {
                "letter": "C",
                "text": "Improving soil fertility exclusively"
            },
            {
                "letter": "D",
                "text": "Only inhabiting zoos"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Competing with and displacing native species",
        "solution": "Invasive species outcompete natives."
    },
    {
        "id": 29,
        "topic": "Environment Management",
        "question": "Groundwater recharge is reduced by:",
        "options": [
            {
                "letter": "A",
                "text": "Permeable surfaces and vegetation"
            },
            {
                "letter": "B",
                "text": "Urbanization and impervious development"
            },
            {
                "letter": "C",
                "text": "Natural infiltration"
            },
            {
                "letter": "D",
                "text": "Harvesting rainwater"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Urbanization and impervious development",
        "solution": "Urbanization and impervious surfaces reduce recharge."
    },
    {
        "id": 30,
        "topic": "Environment Management",
        "question": "Ecosystem resilience refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Immunity from any disturbance"
            },
            {
                "letter": "B",
                "text": "Capacity to absorb disturbance and reorganize"
            },
            {
                "letter": "C",
                "text": "Permanent collapse after change"
            },
            {
                "letter": "D",
                "text": "Lack of biodiversity"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Capacity to absorb disturbance and reorganize",
        "solution": "Resilience is the ability to absorb disturbance."
    },
    {
        "id": 31,
        "topic": "Environment Management",
        "question": "The Polluter Pays Principle (PPP) requires that:",
        "options": [
            {
                "letter": "A",
                "text": "Citizens pay for pollution cleanup"
            },
            {
                "letter": "B",
                "text": "Polluters bear costs to prevent environmental harm"
            },
            {
                "letter": "C",
                "text": "Governments subsidize polluters"
            },
            {
                "letter": "D",
                "text": "Polluters exempt from liability"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Polluters bear costs to prevent environmental harm",
        "solution": "Polluters pay principle makes polluters responsible."
    },
    {
        "id": 32,
        "topic": "Environment Management",
        "question": "The Environmental Impact Assessment (EIA) is a process that:",
        "options": [
            {
                "letter": "A",
                "text": "Only inventories economic loss"
            },
            {
                "letter": "B",
                "text": "Evaluates potential environmental effects of proposed projects"
            },
            {
                "letter": "C",
                "text": "Disregards public participation"
            },
            {
                "letter": "D",
                "text": "Applies only to small projects"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Evaluates potential environmental effects of proposed projects",
        "solution": "EIA evaluates environmental effects of projects."
    },
    {
        "id": 33,
        "topic": "Environment Management",
        "question": "Emission standards aim to:",
        "options": [
            {
                "letter": "A",
                "text": "Increase allowable pollution levels"
            },
            {
                "letter": "B",
                "text": "Limit the amount of specific pollutants released"
            },
            {
                "letter": "C",
                "text": "Only apply to rural areas"
            },
            {
                "letter": "D",
                "text": "None of the above"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Limit the amount of specific pollutants released",
        "solution": "Emission standards limit pollutants."
    },
    {
        "id": 34,
        "topic": "Environment Management",
        "question": "International environmental law is shaped by:",
        "options": [
            {
                "letter": "A",
                "text": "Unilateral national policies only"
            },
            {
                "letter": "B",
                "text": "Treaties, customary law, and principles recognized by nations"
            },
            {
                "letter": "C",
                "text": "Domestic criminal codes exclusively"
            },
            {
                "letter": "D",
                "text": "Economic treaties only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Treaties, customary law, and principles recognized by nations",
        "solution": "International law is shaped by treaties and custom."
    },
    {
        "id": 35,
        "topic": "Environment Management",
        "question": "Habitat conservation laws primarily protect:",
        "options": [
            {
                "letter": "A",
                "text": "Urban parking spaces"
            },
            {
                "letter": "B",
                "text": "Natural ecosystems and species\u2019 native habitats"
            },
            {
                "letter": "C",
                "text": "Only cultivated farmland"
            },
            {
                "letter": "D",
                "text": "Office buildings"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Natural ecosystems and species\u2019 native habitats",
        "solution": "Habitat laws protect natural ecosystems."
    },
    {
        "id": 36,
        "topic": "Environment Management",
        "question": "Carbon trading refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Exchange of fossil fuels for money"
            },
            {
                "letter": "B",
                "text": "Market-based system to trade emission allowances"
            },
            {
                "letter": "C",
                "text": "Payment for water use"
            },
            {
                "letter": "D",
                "text": "Trading of timber"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Market-based system to trade emission allowances",
        "solution": "Carbon trading trades emission allowances."
    },
    {
        "id": 37,
        "topic": "Environment Management",
        "question": "The Precautionary Principle is applied when:",
        "options": [
            {
                "letter": "A",
                "text": "Scientific evidence is conclusive"
            },
            {
                "letter": "B",
                "text": "There are threats of serious environmental harm, even without full proof"
            },
            {
                "letter": "C",
                "text": "Only economic costs are considered"
            },
            {
                "letter": "D",
                "text": "No uncertainty exists"
            }
        ],
        "answer_letter": "B",
        "answer_text": "There are threats of serious environmental harm, even without full proof",
        "solution": "Precautionary principle applies under uncertain risk."
    },
    {
        "id": 38,
        "topic": "Environment Management",
        "question": "Environmental governance includes:",
        "options": [
            {
                "letter": "A",
                "text": "Decisions that affect the environment by governments, NGOs, communities"
            },
            {
                "letter": "B",
                "text": "Only corporate actions"
            },
            {
                "letter": "C",
                "text": "Removing public participation"
            },
            {
                "letter": "D",
                "text": "None of the above"
            }
        ],
        "answer_letter": "A",
        "answer_text": "Decisions that affect the environment by governments, NGOs, communities",
        "solution": "Environmental governance includes multi-stakeholder decision making."
    },
    {
        "id": 39,
        "topic": "Environment Management",
        "question": "Sustainable Forest Management (SFM) aims to:",
        "options": [
            {
                "letter": "A",
                "text": "Exploit forests for maximal short-term gain"
            },
            {
                "letter": "B",
                "text": "Conserve forest ecosystems while meeting social/economic needs"
            },
            {
                "letter": "C",
                "text": "Replace forests with plantations only"
            },
            {
                "letter": "D",
                "text": "Prohibit all human use"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Conserve forest ecosystems while meeting social/economic needs",
        "solution": "SFM balances ecological, social, and economic needs."
    },
    {
        "id": 40,
        "topic": "Environment Management",
        "question": "The Precautionary and Polluter Pays principles are examples of:",
        "options": [
            {
                "letter": "A",
                "text": "Scientific theories"
            },
            {
                "letter": "B",
                "text": "Market incentives"
            },
            {
                "letter": "C",
                "text": "Core environmental law principles"
            },
            {
                "letter": "D",
                "text": "Economic sanctions"
            }
        ],
        "answer_letter": "C",
        "answer_text": "Core environmental law principles",
        "solution": "Precautionary and PPP are core principles."
    },
    {
        "id": 41,
        "topic": "Environment Management",
        "question": "Climate change mitigation refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Accepting all climate impacts"
            },
            {
                "letter": "B",
                "text": "Actions that reduce greenhouse gas emissions"
            },
            {
                "letter": "C",
                "text": "Only adaptation strategies"
            },
            {
                "letter": "D",
                "text": "Population control"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Actions that reduce greenhouse gas emissions",
        "solution": "Mitigation reduces greenhouse gas emissions."
    },
    {
        "id": 42,
        "topic": "Environment Management",
        "question": "Climate change adaptation involves:",
        "options": [
            {
                "letter": "A",
                "text": "Reducing emissions"
            },
            {
                "letter": "B",
                "text": "Adjusting systems to minimize harm"
            },
            {
                "letter": "C",
                "text": "Only planting trees annually"
            },
            {
                "letter": "D",
                "text": "Ignoring scientific data"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Adjusting systems to minimize harm",
        "solution": "Adaptation adjusts systems to minimize harm."
    },
    {
        "id": 43,
        "topic": "Environment Management",
        "question": "The Paris Agreement aims to:",
        "options": [
            {
                "letter": "A",
                "text": "Eliminate all fossil fuel use immediately"
            },
            {
                "letter": "B",
                "text": "Strengthen global response to climate change and limit warming"
            },
            {
                "letter": "C",
                "text": "Focus only on developed countries"
            },
            {
                "letter": "D",
                "text": "Revoke Kyoto Protocol"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Strengthen global response to climate change and limit warming",
        "solution": "Paris Agreement strengthens global climate response."
    },
    {
        "id": 44,
        "topic": "Environment Management",
        "question": "Ocean acidification is caused primarily by:",
        "options": [
            {
                "letter": "A",
                "text": "Increased ocean salinity"
            },
            {
                "letter": "B",
                "text": "Uptake of atmospheric CO\u2082 by oceans"
            },
            {
                "letter": "C",
                "text": "Increased oxygen in water"
            },
            {
                "letter": "D",
                "text": "Depletion of fish stocks only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Uptake of atmospheric CO\u2082 by oceans",
        "solution": "Ocean absorbs CO\u2082 leading to acidification."
    },
    {
        "id": 45,
        "topic": "Environment Management",
        "question": "Sustainable agriculture emphasizes:",
        "options": [
            {
                "letter": "A",
                "text": "Heavy chemical inputs"
            },
            {
                "letter": "B",
                "text": "Maintaining productivity without degrading ecosystem services"
            },
            {
                "letter": "C",
                "text": "Monocultures only"
            },
            {
                "letter": "D",
                "text": "Importing food exclusively"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Maintaining productivity without degrading ecosystem services",
        "solution": "Sustainable agriculture maintains productivity and ecosystem services."
    },
    {
        "id": 46,
        "topic": "Environment Management",
        "question": "Circular economy is a system that:",
        "options": [
            {
                "letter": "A",
                "text": "Encourages continuous resource extraction"
            },
            {
                "letter": "B",
                "text": "Designs out waste and keeps materials in use"
            },
            {
                "letter": "C",
                "text": "Promotes single-use products"
            },
            {
                "letter": "D",
                "text": "Eliminates all manufacturing"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Designs out waste and keeps materials in use",
        "solution": "Circular economy designs out waste."
    },
    {
        "id": 47,
        "topic": "Environment Management",
        "question": "Urban heat island effect results in:",
        "options": [
            {
                "letter": "A",
                "text": "Rural areas hotter than cities"
            },
            {
                "letter": "B",
                "text": "Cities experiencing higher temperatures due to concrete and asphalt"
            },
            {
                "letter": "C",
                "text": "Cooling of metropolitan zones"
            },
            {
                "letter": "D",
                "text": "No temperature gradients"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Cities experiencing higher temperatures due to concrete and asphalt",
        "solution": "Urban heat island = hotter cities due to surfaces/materials."
    },
    {
        "id": 48,
        "topic": "Environment Management",
        "question": "Green infrastructure includes:",
        "options": [
            {
                "letter": "A",
                "text": "Grey cement structures exclusively"
            },
            {
                "letter": "B",
                "text": "Natural and semi-natural systems that provide environmental benefits"
            },
            {
                "letter": "C",
                "text": "Only highways"
            },
            {
                "letter": "D",
                "text": "Subterranean pipes only"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Natural and semi-natural systems that provide environmental benefits",
        "solution": "Green infrastructure uses natural systems for benefits."
    },
    {
        "id": 49,
        "topic": "Environment Management",
        "question": "Environmental refugees are those displaced by:",
        "options": [
            {
                "letter": "A",
                "text": "Trade disputes"
            },
            {
                "letter": "B",
                "text": "Natural and human-induced environmental degradation"
            },
            {
                "letter": "C",
                "text": "Economic migration"
            },
            {
                "letter": "D",
                "text": "None of the above"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Natural and human-induced environmental degradation",
        "solution": "Environmental refugees are displaced by environmental degradation."
    },
    {
        "id": 50,
        "topic": "Environment Management",
        "question": "Planetary boundaries concept refers to:",
        "options": [
            {
                "letter": "A",
                "text": "Maximum economic growth limits"
            },
            {
                "letter": "B",
                "text": "Safe environmental limits Earth can withstand without systemic change"
            },
            {
                "letter": "C",
                "text": "Political borders"
            },
            {
                "letter": "D",
                "text": "Country quotas"
            }
        ],
        "answer_letter": "B",
        "answer_text": "Safe environmental limits Earth can withstand without systemic change",
        "solution": "Planetary boundaries = environmental thresholds Earth can sustain."
    }
];

const questionsData = {
    "numerical": numericalQuestions,
    "analytical_word": analyticalQuestions,
    "analytical_logical": logicalQuestions,
    "analytical_data": dataInterpQuestions,
    "verbal_grammar": verbalGrammarQuestions,
    "verbal_vocab": verbalVocabQuestions,
    "verbal_paragraph": verbalParaQuestions,
    "verbal_reading": verbalReadingQuestions,
    "geninfo_const": genInfoConstQuestions,
    "geninfo_conduct": genInfoConductQuestions,
    "geninfo_peace": genInfoPeaceQuestions,
    "geninfo_environment": genInfoEnvironmentQuestions
};
