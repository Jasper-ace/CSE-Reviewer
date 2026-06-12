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

const questionsData = {
    "numerical": numericalQuestions
};
