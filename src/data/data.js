const emergencyScenarios = [
    {
        id: 1,
        situation: `מעמ"ל`,
        description: "מצב של הכנה למלחמה או איומים ביטחוניים.",
        notes: [
          "ניצול 'זמן יקר' וצמצום זמן התגובה הראשונית",
          "ארגון תמונת מצב אוכלוסיה (מתעדכנת)",
          "בדיקת ציוד ותשתיות והכנתם לשימוש מיידי",
          "מעבר מהיר לאירועי חירום",
          `ראשי צוותי מעדכנים את היו"ר על מצב המוכנות של הצוות שלהם - איוש, ציוד, משמרות, זמינות, המלצות להמשך`
      ],
        roles: [
          {
              role: `יו"ר צח"י`,
              id:1,
              tasks:[
                  "קבלת עדכון תמונת מצב מדינה/גזרה מהמועצה",
                  "וידוא יצירת מודיעין אוכלוסיה תושבים/אורחים",
                  "הפעלת משמרות 24/7 בחמ\"ל הצח\"י והגדרת נהלי התכנסות",
                  "שליטה באוכלוסייה ע\"י מודיעין ומידע לציבור",
                  "העברת עדכון חצי יומי / יומי למועצה",
                  "תאום מועד ומקום לכינוס הצוות"
              ],
                color: "#22B573"
            },
            {
              role: "ביטחון",
              id:2,
              tasks: [
                  "בדיקת זמינות אנשי הצוות",
                  "בדיקת תקינות ציוד - עגלות קיימות",
                  "איגום משאבי חילוץ וכיבוי - ג'קים, לומים בולי עץ",
                  "בדיקת תקינות צירי תנועה וצירים חלופיים",
                  "הגדרת שדכנים בשער היישוב למקרה אירועים"
              ],
              color:"#00AAD1"
            },
            {
              role: "אוכלוסייה",
              id:3,
              tasks:  [
                  "בדיקת זמינות אנשי הצוות",
                  "יצירת תמונת מצב מודיעין אוכלוסייה: מי ביישוב, בעבודה, בחו\"ל ומי מנותק קשר",
                  "יצירת תמונת מצב אורחים (כולל מפונים/מתפנים) - מי נקלט ביישוב",
                  "בירור לגבי אוכלוסייה חלשה/נפגעי חרדה (גם בשקט), זקוקים לסיוע צמוד (רפואי/נפשי)",
                  "יצירת מענה תומך למשפחות בהן אחד ההורים במילואים/חו\"ל"
              ],
              color:"#FF6D01"
    
            },
            {
              role: "לוגיסטיקה",
              id:4,
              tasks:[
                  "בדיקת זמינות אנשי הצוות",
                  "בדיקת ציוד לוגיסטי וזמינותו - טרקטורים, כלל אמצעי כיבוי, אמצעי חשמל, גז, תאורה",
                  "הכשרת דרכי כניסה ויציאה מהיישוב והמלצה על התוואי לביטחון של הצח\"י",
                  "מיפוי חומרים מסוכנים והמלצה לטיפול במידת הצורך",
                  "יצירת רשימה ליו\"ר - ציוד לוגיסטי זמין"
              ],
              color:"#FFA133"
    
            },
            {
              role: "מידע לציבור",
              id:5,
              tasks: [
                  "בדיקת זמינות אנשי הצוות",
                  "הוצאת הודעה על שגרת היישוב - הודעה פעם בחצי יום או פעם ביממה",
                  "מעבר על הודעות נצורות רלוונטיות לתרחיש החירום (מלחמה, שריפה וכו')",
                  "הודעה על טלפון חרום של מרכז מידע לציבור (לא החמ\"ל!)",
                  "ווידוא תקינות קו הטלפון של מרכז פניות תושבים"
              ],
              color:"#9F2B68"
    
            },
            {
              role: `חמ"ל`,
              id:6,
              tasks: ["עדכון רשימות אנשים אחת לחצי שנה"],
              color:"#EA4335"
    
            },
          
        ]
      },
    {
      id: 2,
      situation: "שגרה",
      description: "מצב רגיל שבו כל התהליכים מתנהלים כמתוכנן.",
      notes:[
        "הכרות אישית בין חברי הצוותים",
        "זיכרון אירגוני והתאמת שיטות עבודה בין הצוותים",
        "חיבור המתנדבים לעשייה ביישוב",
        "הגדרת נהלי וממשקי עבודה של כל צוות ובין הצוותים בצח\"י",
        "מעבר על תרחישים בבוט זה ליצירת תוכנית מגירה - כל צוות לעצמו וסנכרון של כולם ע\"י יו\"ר הצח\"י",
        "תרגיל \"בירה קרה\" כל 3 חודשים",
        "אירוע הוקרה למתנדבים אחת לשנה",
        "השתתפות בהדרכות במועצה לדרישה מהמועצה לקורסים והדרכות בהתאם לפערים ביישוב",
        "תרגיל שטח אחת לשנה בתרחיש שיבחר ע\"י היו\"ר"
    ],
      roles: [
        {
          role: `יו"ר צח"י`,
          id:1,
          tasks:[
            "ניהול הצוות",
            "מיפוי סיכונים",
            "מיפוי חוזקות וחולשות",
            "ביצוע ביקורת ציוד ורשימת אנשים/ציוד לראשי הצוותים אחת לחצי שנה"
        ],
            color: "#22B573"
        },
        {
          role: "ביטחון",
          id:2,
          tasks: ["עדכון רשימות אנשים וציוד ריענון ובדיקה אחת לחצי שנה"],
          color:"#00AAD1"
        },
        {
          role: "אוכלוסייה",
          id:3,
          tasks: ["עדכון רשימות אנשים וציוד רענון ובדיקה אחת לחצי שנה"],
          color:"#FF6D01"

        },
        {
          role: "לוגיסטיקה",
          id:4,
          tasks: ["עדכון רשימות אנשים וציוד רענון ובדיקה אחת לחצי שנה"],
          color:"#FFA133"

        },
        {
          role: "מידע לציבור",
          id:5,
          tasks: ["עדכון רשימות אנשים וציוד רענון ובדיקה אחת לחצי שנה, רענון והכרות עם הודעות נצורות לכלל האירועים"],
          color:"#9F2B68"

        },
        {
          role: "הנהלת היישוב",
          id:6,
          tasks: ["עדכון רשימות אנשים אחת לחצי שנה"],
          color:"#8B8B8B"

        },
      ]
    },
   
    {
      id: 3,
      situation: "מלחמה",
      description: "מצב חירום עקב התקפה צבאית.",
      notes: [
        "שעות ראשונות/ ימים ראשונים מורכבים במיוחד - נזק לתשתיות ומורל",
        "ירוע מתמשך למשך מספר שבועות - נפגעי חרדה, הפסקות לימודים - שיבוש שגרה",
        "חוסן היישוב מושפע ישירות מהיכולת לקיים שגרת חיים",
        "תמיכה למשפחות של מגוייסים - בשירות חובה ומילואים",
        "קליטה ספונטנית וקליטה מסודרת של תושבים מאזורי הלחימה",
        "סבירות גבוהה להפסקות חשמל/מים ממושכות",
        "היערכות לנפילות טילים שמחוללים: שריפות, אתרי הרס, נפגעים, חרדות, נזק לתשתיות"
        ],
        roles : [
            {
              role: `יו"ר צח"י`,
              id: 1,
              tasksByPhases: {
                "לפני האירוע": [
                  "קבלת הנחיות התגוננות פקע\"ר מהמועצה והבנת המשמעויות בדגש על לימודים"
                ],
                "במהלך האירוע": [
                  "הגדרת שגרת חירום לצח\"י וליישוב יחד עם הנהלת היישוב",
                  "לפעול לעיבוי מתנדבי צח\"י בכל הצוותים ע\"ב מתנדבים חדשים אד הוק",
                  "עבודה עם מנהל קהילה על יצירת מענה קהילתי ולו\"ז קבוע של שגרת חירום של היישוב"
                ],
                "אחרי האירוע": [
                  "היערכות לקליטת אוכלוסייה - בדגש על 'לעזור להם לעזור לעצמם'",
                  "היערכות לקליטת מתנדבים בודדים/אירגונים"
                ]
              },
              color: "#22B573"
            },
            {
              role: "ביטחון",
              id: 2,
              tasksByPhases: {
                "לפני האירוע": [
                  "קבלת עדכונים יומיים מקב\"ט המועצה"
                ],
                "במהלך האירוע": [],
                "אחרי האירוע": []
              },
              color: "#00AAD1"
            },
            {
              role: "אוכלוסייה",
              id: 3,
              tasksByPhases: {
                "לפני האירוע": [
                  "המלצה לתוכנית סיוע לאוכלוסייה חלשה",
                  "ביצוע קשר לאוכלוסיות ולמוסדות מיוחדים ביישוב"
                ],
                "במהלך האירוע": [
                  "היערכות להפסקת לימודים ו/או למידה מרחוק",
                  "רתימת הנוער והכנת החינוך הבלתי פורמאלי (תכנית למידה חלופית)"
                ],
                "אחרי האירוע": [
                  "סיוע מקצועי לקליטת האורחים",
                  "יציות שמרטפייה למתנדבי צח\"י"
                ]
              },
              color: "#FF6D01"
            },
            {
              role: "לוגיסטיקה",
              id: 4,
              tasksByPhases: {
                "לפני האירוע": [
                  "היערכות לנפילות טילים / זירות הרס",
                  "יצירת שמרטפייה למתנדבי צח\"י"
                ],
                "במהלך האירוע": [],
                "אחרי האירוע": [
                  "הכנות לוגיסטיות לקליטה"
                ]
              },
              color: "#FFA133"
            },
            {
              role: "מידע לציבור",
              id: 5,
              tasksByPhases: {
                "לפני האירוע": [
                  "פרסום הנחיות פקע\"ר והמועצה בדגש על הנחיות. אזור התראה רלוונטי ומציאת \"הכי מוגן שיש\"."
                ],
                "במהלך האירוע": [
                  "הודעה כל חצי יום עדכונים (מידע בדחיפה) מתי יצא העדכון הבא"
                ],
                "אחרי האירוע": [
                  "עדכון התושבים בנעשה בדגש על האורחים ביישוב (יצירת קבוצת קשר נוספת על תושבי הקבע ביישוב)"
                ]
              },
              color: "#9F2B68"
            },
            {
              role: `הנהלת ישוב`,
              id: 6,
              tasksByPhases: {
                "לפני האירוע": [
                  "חבירה לצח\"י ויצירת נהלי ישוב לחירום וסדר יום מוגדר כולל הערכות מצב יומיות וקשר עם תושבים"
                ],
                "במהלך האירוע": [
                  "תכנית תמיכה למשפחות - מגויסים למילואים, נזקקים, מאובחנים"
                ],
                "אחרי האירוע": [
                  "עבודה משותפת עם כל הצח\"י ליצירת מענה משלים קהילתי"
                ]
              },
              color: "#8B8B8B"
            }
          ],
    },
    {
      id: 4,
      situation: "תקיפת ישוב",
      description: "מצב חירום כאשר הישוב מותקף.",
      notes: [
        "השהייה מקסימלית של התוקפים ממגע עם האוכלוסיה",
        "מזעור למינימום האפשרי את החשיפה של האוכלוסייה לתוקפים",
        "לאפשר התערבות מהירה של כוחות ביטחון, רפואה וחילוץ",
        "התארגנות לפינוי האוכלוסייה במצב בטוח, גם תוך כדי לחימה, דרך מסדרון בטוח ליציאה",
        "פינוי האוכלוסייה בבטחה למקום מוגן"
    ],
      roles: [
        {
          role: `יו"ר צח"י`,
          id:1,
          tasks:[
            "נוכחות חברי צח\"י",
            "מינוי חבר ל'ירוק בעיניים' (מניפה - מיפוי מיקום תושבים)",
            "הודעה (יחד עם מידע)",
            "סטטוס בבתים - כל 15 דקות"
        ],
            color: "#22B573"
        },
        {
          role: "ביטחון",
          id:2,
          tasks: [
            "כיתת כוננות + מפקד",
            "חלוקת גזרות",
            "קשר",
            "נוה\"ק",
            "הפעלת חמ\"ל",
            "איש קשר לצח\"י",
            "סגירת שערי יישוב + הגנה",
            "מיקום תצפית בנקודות שולטות",
            "הזעקת כוחות ביטחון, חילוץ והצלה",
            "הפעלת נושאי נשק ביישוב",
            "צוות רפואי"
        ],
          color:"#00AAD1"
        },
        {
          role: "אוכלוסייה",
          id:3,
          tasks: [
            "מיפוי אוכלוסיות רגישות",
            "מניפה",
            "תוכנית פינוי (יחד עם ביטחון ולוגיסטיקה)"
        ],
          color:"#FF6D01"

        },
        {
          role: "לוגיסטיקה",
          id:4,
          tasks: [
            "סגירת שערים",
            "רכבי פינוי אוכלוסייה",
            "רכבי פינוי רפואי",
            "חשמלאי",
            "מקלטים ומרחבים ממוגנים",
            "צוות כיבוי וחילוץ"
        ],
          color:"#FFA133"

        },
        {
          role: "מידע לציבור",
          id:5,
          tasks: [` הודעות =מה קורה, איפה קורה, הנחיות`],
          color:"#9F2B68"

        },
        {
          role: "חינוך",
          id:6,
          tasks: [
            "הנחיות למסגרות חינוך",
            "שליטה במיקום תלמידים + איש צוות"
        ],
          color:"#8B008B"

        },
      ]
    },
    {
        id: 5,
        situation: "פינוי ישוב",
        description: "מצב חירום שבו יש צורך לפנות את הישוב.",
        notes: "ודא שהפינוי מתבצע בצורה מסודרת ובטוחה.",
        roles: [
        ]
      },

      {
        id: 6,
        situation: "קריסת מבנה",
        description: "מצב חירום כאשר מבנה מתמוטט.",
        notes: [
            "נזק מרחבי מעבר לזירה עצמה",
            "נפגעים מוכרים מהיישוב - הודעות מידע לציבור והפעלת נערים",
            "הוצאת דרישה לאמצעים וסיוע כמה שיותר מהר",
            "דגש על יצירת מודיעין אוכלוסייה בזירה - מי בדיוק היה בה רגע לפני הפגיעה/קריסה"
        ],
        roles: [
            {
                role: `יו"ר צח"י`,
                id:1,
                tasks:[
                    "יצירת תמ\"צ יישוב וזירה מי נוכח, מי צריך סיוע, מי מנותק קשר",
                    "קבלת תמונת מצב ממנהל זירה ואיחוד התמונה עם אוכלוסייה",
                    "אירגון צוותי חילוץ ומוכנות לקבלת סיוע מיישובים",
                    "שליטה בכמות נפגעים, חרדה, והודעות למשפחה",
                    "שליטה באוכלוסייה ע\"י מודיעין ומידע לציבור",
                    "היערכות למענה למחוסרי גג",
                    "הודעות עדכון למועצה"
                ],
                  color: "#22B573"
              },
              {
                role: "ביטחון",
                id:2,
                tasks:[
                    "חבירה למנהל הזירה ובידוד הזירה",
                    "סיוע למנהל הזירה בהתאם לצורך",
                    "הכוונת כוחות חילוץ בשער היישוב",
                    "השארת צירים פנויים מרכבים ומסקרנים",
                    "לאחר טיפול בזירה - להשאיר נציג שיוודא שאף אחד שלא מורשה לא ייכנס אליה"
                ],
                color:"#00AAD1"
              },
              {
                role: "אוכלוסייה",
                id:3,
                tasks: [
                    "יצירת תמונת מצב מודיעין אוכלוסייה - מי ביישוב, מי בעבודה ומי מנותק קשר",
                    "העברת נתוני אוכלוסייה למנהל זירה - מי בדיוק מתגורר במבנים שנפגעו",
                    "סיוע בהכוונת מתנדבי אד הוק (כולל בני נוער) סגירת מעגלים מול מנהל זירה על כמות תושבים בזירה ומציאת פערים (השוואת רשימות)",
                    "יצירת תכנית 'מענה משלים' קהילתי לשעות הקרובות ולימים הקרובים לאישור היו\"ר",
                    "סיוע נפשי לילדים ולנוער",
                    "הכנת צוות 'הודעה מרה' מהיישוב על כלל המשמעויות"
                ],
                color:"#FF6D01"
      
              },
              {
                role: "לוגיסטיקה",
                id:4,
                tasks:[
                    "טיפול במפגעים - סגירת חשמל, מים וגז בזירה",
                    "אספקת אמצעי חילוץ - ג'קים, לומים, חבלים, שרשראות, טרקטורים ועוד",
                    "הערכות להארת הזירה בשעות החושך",
                    "סיוע שוטף במזון ושתייה למי שעובד בזירה"
                ],
                color:"#FFA133"
      
              },
              {
                role: "מידע לציבור",
                id:5,
                tasks: [
                    "פרסום ראשוני על הזירה כמה שיותר מהר",
                    "פרסום הנחייה להתרחקות סקרנים ומיקום ונציג קליטת מתנדבים",
                    "פרסום נפגעים כמה שיותר מהר (לאחר ההודעה המרה)",
                    "הודעות עדכון כל שעה על מצב החילוץ בזירה",
                    "הודעה על הפסקת החילוץ ופרסום הנחיות יו\"ר בהתאם",
                    "להצעות של מכלול אוכלוסייה על 'מענה משלים'"
                ],
                color:"#9F2B68"
      
              },
              {
                role: "מנהל זירה ",
                id:6,
                tasks: [
                    "סריקה ראשונית: תיחום הזירה העברת דיווח ליו\"ר צח\"י ובקשה לאמצעים/אנשים",
                    "הערכת זירה: מסוכנות, נפגעים, מבנים נוספים",
                    "חלוקת גזרות לצוותים והגדרת אחריות",
                    "ווידאו נטרול מפגעים - חשמל, גז, מים",
                    "הגדרת נתיבי כניסה ויציאה מהזירה",
                    "קביעת נקודות - פצועים, הרוגים, חרדה, פינוי פסולת",
                    "הגדרת אחראי על מודיעין אוכלוסייה בזירה שייצור תמונה 'דקה טרום האירוע' - מי היה בבית שנפגע וסינכרון עם תכניות המבנה (ממח' הנדסה של המועצה)",
                    "הכנסת כוחות חילוץ נוספים לזירה"
                ],
                color:"#EA4335"
      
              },
        ]
      },




    {
      id: 7,
      situation: "שריפה",
      description: "מצב חירום עקב שריפה בשטח.",
      notes: [
        "סכנת חיים מיידית - חייבת תגובה מהירה והחלטית",
        "פגיעה בתשתיות - חשמל, כבישים חסומים וכו..",
        "צורך בפינוי מיידי ולעיתים אילתורים בפינוי (כגון הליכה רגלית, הסעה ע\"ג קלאב קאר ועוד)",
        "טיפול מתמשך במפונים וטיפול פרטני באלה שביתם נשרף"
    ],
    roles:[
        {
        role: `יו"ר צח"י`,
        id: 1,
        tasksByPhases: {
          "בשגרה": [
            `קבלת הערכה מקב"ט המועצה על אינדקס. שריפות גבוהה ועדכון ראשי הצוותים בצח"י`
          ],
          "באירוע שריפה מוגבל (ללא היערכות לפינוי)": [
            "הגדרת ראש צוות כיבוי וצוותו",
            "יצירת תמ\"צ יישוב, עדכון המועצה וצח\"י",
            "הבנת מידת האיום והגדרת דחיפות להיערכות לפינוי או פינוי בפועל של שכונה/יישוב שלם"
        ],
          "לאחר הבנה/הנחייה על היערכות או ביצוע פינוי": [
            "הנחייה על בניית תכנית עבודה לפינוי ותיכלול כל הצוותים",
            "שליטה באוכלוסייה ע\"י מודיעין ומידע לציבור",
            "חבירה לכוחות חיצוניים וקבלת תמ\"צ רלוונטית",
            "דיווח למועצה/חפ\"ק שכלל התושבים פונו"
        ],
        "לאחר הפינוי":[
            "תיכלול מיפוי מקים פיסיים ולתושבים שאינם יכולים לחזור לבתיהם",
            "כתיבת תהליך חזרה לשגרה"
        ]
        },
        color: "#22B573"
      },
      {
        role: "ביטחון",
        id: 2,
        tasksByPhases: {
            "בשגרה": [
                "לקבוע רשימת צופי אש וסיורים בשטת מסביב לשעון",
                "הכנת ציוד יחד עם צוות הלוגיסטיקה"
            ],
            "באירוע שריפה מוגבל (ללא היערכות לפינוי)": [
                "הזעקת כוחות חירום כב\"ה, משטרה, מד\"א ו\"שדכן\" בשער היישוב להכוונה",
                "קבלת מודיעין אוכלוסייה לגבי תושבים בזירה",
                "סריקה בזירה לפי סדרי עדיפויות (בבית, בחו\"ל וכו)",
                "בידוד הזירה מסקרנים"
            ],
            "לאחר הבנה/הנחייה על היערכות או ביצוע פינוי": [
                "הוצאה לפועל של תכנית הפינוי",
                "הצבת מחסומים והכוונת התנועה",
                "עדכון שוטף של יו\"ר צח\"י ומכלול אוכלוסייה על התקדמות הסריקות"
            ],
          "לאחר הפינוי":[
            "שמירה על סדר ציבורי וחסימת אזורים בעלי סיכון התלקחות.",
            "מיפוי נזקים לבתי תושבים"
        ]
          },
        color: "#00AAD1"
      },
      {
        role: "אוכלוסייה",
        id: 3,
        tasksByPhases: {
            "בשגרה": [
                "ריענון רשימות תושבים במיוחד באזורים המועדים/בסיכון לשריפה"
            ],
            "באירוע שריפה מוגבל (ללא היערכות לפינוי)":[
                "יצירת תמונת מצב מודיעין אוכלוסייה - מי ביישוב ומי מנותק קשר בדגש על איזור השריפה",
                "המלצה לתוכנית סריקה לפי נתוני תמונת מצב אוכלוסייה",
                "טיפול בנפגעי חרדה - מפונים, באיזור השריפה"
            ],
            "לאחר הבנה/הנחייה על היערכות או ביצוע פינוי": [
                "ביצוע מעקב שמי על המפונים",
                "סיוע לנפגעי חרדה והגדרת טיפול ראשוני במפונים",
                "מעקב שמי אחר מפונים והעברת פערים (ליו\"ר וביטחון)"
            ],
          "לאחר הפינוי":[
            "מיפוי של תושבים שאינם יכולים לחזור לבתיהם",
            "ליווי וטיפול בנפגעי חרדה ואלה שביתם נשרף"
        ]
          },
        color: "#FF6D01"
      },
      {
        role: "לוגיסטיקה",
        id: 4,
        tasksByPhases: {
            "בשגרה": [
                "טיפול וסילוק מפגעים פוטנציאליים, מיפוי אזורי כיסוי הידראנטים, הכנת ציוד - נייד וזמין"
            ],
            "באירוע שריפה מוגבל (ללא היערכות לפינוי)": [
                "סילוק מפגעי תשתית מהזירה - חשמל, גז, רכבים וכו",
                "גיוס אמצעי הנדסה - כגון טרקטורים ליצירת חציצה",
                "מיפוי חומרים מסוכנים והמלצה לטיפול"
            ],
            "לאחר הבנה/הנחייה על היערכות או ביצוע פינוי": [
                "הכשרת דרכי כניסה ויציאה מהיישוב והמלצה על תוואי הפינוי למחלקת ביטחון",
                "סיוע באמצעי הובלה/הסעה של המפונים",
                "הקמה לוגיסטית של נקודת קליטה ופינוי פצועים"
            ],
          "לאחר הפינוי":[
            "סיוע לוגיסטי למפונים בנקודת הפינוי",
            "מיפוי נזקים לתשתיות החיוניות של היישוב"
        ]
          },
        color: "#FFA133"
      },
      {
        role: "מידע לציבור",
        id: 5,
        tasksByPhases: {
            "בשגרה": [
                "ריענון הודעות נצורות: למקרה שריפה, היערכות לפינוי ופינוי"
            ],
            "באירוע שריפה מוגבל (ללא היערכות לפינוי)": [
                "הודעה מוכנה מראש על מיקום השריפה והנחיות ראשוניות",
                "הוצאת הנחיות משטרה וכב\"ה",
                "הודעות שוטפות על התקדמות האירוע ומתי יצא העדכון הבא"
            ],
            "לאחר הבנה/הנחייה על היערכות או ביצוע פינוי":[
                "הודעה על היערכות לפינוי או פינוי בפועל",
                "הודעות על: מסלול הפינוי ופתיחת נקודת קליטת מפונים"
            ],
          "לאחר הפינוי":[
            "הודעות על המשך הטיפול בשריפה ובמפונים",
            "עדכון על סיום הפינוי וצעדיפ הבאים"
        ]
          },
        color: "#9F2B68"
      },
      {
        role: `צוות כיבוי בזירה `,
        id: 6,
        tasksByPhases: {
            "בשגרה": [
                "ביצוע אימון \"רטוב\" של הצוות על כלל הציודים"
            ],
            "באירוע שריפה מוגבל (ללא היערכות לפינוי)": [
                "הגדרת תיחום האירוע וביצוע פעולות כיבוי בזירה ע\"ב הידראנטים, מטפים, מחבטי אש וכו'",
                "אבחנה במימדי האיום - בהתאם לרוח, אמצעי הובלה ומזג אוויר",
                "בידוד הזירה - בלוני גז, חשמל, רכבים וכו'",
                "דיווח ליו\"ר צח\"י כל 10 דק' לפחות."
            ],
            "לאחר הבנה/הנחייה על היערכות או ביצוע פינוי": [
                "המשך לחימה באש, תוך דגש על עיכוב התקדמות. האש לנתיב הפינוי המתוכנן"
            ],
          "לאחר הפינוי":[
            "מנוחה וחידוש הציוד",
            "מוכנות מלאה לתת מענה למקרה התלקחות מחודשת."
        ]
          },
        color: "#EA4335"
      }
    ],
    },
    
    
  ];
  
  export default emergencyScenarios;