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

const questionsData = {
    "numerical": numericalQuestions,
    "analytical_word": analyticalQuestions,
    "analytical_logical": logicalQuestions,
    "analytical_data": dataInterpQuestions,
    "verbal_grammar": verbalGrammarQuestions
};
