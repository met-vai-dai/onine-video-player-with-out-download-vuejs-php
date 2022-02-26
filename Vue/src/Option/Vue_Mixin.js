import Vue from "vue";

export default Vue.mixin({
    methods: {
        Filter_Var(Text) {
            let Return_Data = true;
            for (let i = 0; i <= this.Filter_Vars.length - 1; i++) {
                if (Return_Data == false) {
                    break;
                }
                for (let j = 0; j <= this.Filter_Vars.length - 1; j++) {
                    if (Text[j] == this.Filter_Vars[i] || Text[j] === this.Filter_Vars[i]) {
                        Return_Data = false;
                        break;
                    } else {
                        Return_Data = true;
                    }
                }
            }
            return Return_Data;
        },
        Check_Json_Validate() {
            let Json_Data = "{ }";
            try {
                JSON.parse(Json_Data);
            } catch (e) {
                return false;
            }
            return true;
        },
        Get_PHP_API(URL) {
            return this.PHP_API_Specifications.HTTP_API_Path + URL;
        },
        Is_Number_Validate(Val) {
            if (Val.length == 0) {
                return false;
            } else {
                let Value_Length = Val.length;
                let Value = parseInt(Val.replace(/[^0-9.]/g, ""));
                if (Value.length == Value_Length.length) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        Only_Input_Number(event) {
            //On Key Press Event
            return event.charCode >= 48 && event.charCode <= 57;
        },
        Get_Site_Key() {
            return this.reCaptcha.Site_Key;
        },
        Get_reCaptcha_API_URL(Secret_Key, Response) {
            return "https://www.google.com/recaptcha/api/siteverify?secret=" + Secret_Key + "&response=" + Response;
        }
    },

    data() {
        return {
            /********************  Const Vars *******************/
            PHP_API_Specifications: {
                // HTTP_API_Path: "https://goharbardashtsari.com/api/"
                HTTP_API_Path: "https://api.goharbardashtsari.com/"
                // HTTP_API_Path: "http://localhost/Goharbardashtsari_VueJS/API/"
            },
            /**********************  Others *********************/
            Filter_Vars: [
                '[',
                ']',
                '}',
                '{',
                '<',
                '>',
                '/',
                '#',
                '^',
                '*',
                '&',
                '$',
                '%'
            ],
            reCaptcha: {
                //LOCAL
                // Site_Key: '6LcBSFEaAAAAANn4bKg-PYRYMmKJZ7k3GX_4u8z3',
                // Secret_Key: '6LcBSFEaAAAAAAnkoA3iRm4OWo34RBeGjbCDNws'


                Site_Key: '6Le9NXoaAAAAAG2fJp1tWRXro-725UbJFlrUFjJG',
                Secret_Key: '6Le9NXoaAAAAAPkLR_FESPOBVqYAL7esHVNG7JN2'
            }
        };
    }
});

