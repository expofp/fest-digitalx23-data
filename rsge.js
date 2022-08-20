function alert(m) {
    console.log("alert", m);
}

class Answerer {
    constructor() {
        // this.commonService = n;
        // this.calendar = e;
        this.question_array = [];
        this.qustionContainer = [];
        this.answers_array = [];
        this.YesButton = "\u10d3\u10d8\u10d0\u10ee";
        this.NoButton = "\u10d0\u10e0\u10d0";
        this.SubbmitButton = "\u10e8\u10d4\u10db\u10d3\u10d4\u10d2\u10d8";
        this.name = "";
        this.index = 0;
        this.customerData = {};
        this.question = "";
        this.showQuestion = !1;
        this.sumanswer = 0;
        this.sumNoanswer = 0;
        this.selectedUser = "tbilisi";
        this.showGrd = !0;
        this.show_popup = !1;
        this.result = "";
        this.Org_Pin = "";
        this.Org_Name = "";
        this.Employee_PIN = "";
        this.Employee_Name = "";
        this.authenticated = !1;
        this.isEmp = !1;
        this.showErroAlert = !1;
        this.empFullName = "";
        this.empTin = "";
        this.view = "v_main";
        this.answersAndQuestions = [];
        this.color = "";
        this.fullCount = 0;
        this.finalResult = "";
        this.radioYes = "";
    }

    // get answer() {
    //     return "no";
    // }
    // set answer(val) {
    //     // ignore
    // }

    processOne(answer) {
        answer = answer;
        if ("" == answer || null == answer || null == answer) {
            alert("choose answer");
            return;
        }

        this.fullCount++;
        
        // if ( this.index > -1 && this.index < 7){
        //     if("no" == answer){
        //         this.incorrect_answer()
        //     } else {

        //     }
        // }

        this.index > -1 && this.index < 7
            ? "no" == answer
                ? this.incorrect_answer()
                : "yes" == answer && (this.correct_answer(), this.result_payer())
            : this.index > 6 && this.index < 26
            ? (this.index > 6 && this.index < 22
                  ? "yes" == answer
                      ? this.correct_answer()
                      : this.incorrect_answer()
                  : this.index > 21 &&
                    this.index < 26 &&
                    ("no" == answer ? this.correct_answer() : this.incorrect_answer()),
              7 == this.sumanswer
                  ? this.result_payer()
                  : this.sumNoanswer > 18
                  ? this.result_service()
                  : (answer = ""))
            : this.index > 25 && this.index < 35
            ? (26 == this.index || 29 == this.index || 32 == this.index
                  ? "no" == answer
                      ? this.correct_answer()
                      : this.incorrect_answer()
                  : "yes" == answer
                  ? this.correct_answer()
                  : this.incorrect_answer(),
              11 == this.sumanswer
                  ? this.result_payer()
                  : this.sumNoanswer > 18
                  ? this.result_service()
                  : (answer = ""))
            : this.index > 34 &&
              this.index < 38 &&
              ("yes" == answer
                  ? 37 == this.index
                      ? (this.correct_answer(), this.result_payer())
                      : this.correct_answer()
                  : 37 == this.index
                  ? (this.incorrect_answer(), this.result_service())
                  : this.incorrect_answer(),
              13 == this.sumanswer
                  ? this.result_payer()
                  : this.sumNoanswer > 18
                  ? this.result_service()
                  : (answer = "")),
            38 == this.fullCount && ("" != this.finalResult ? this.show_personal_popup() : alert("system error"));
            // console.log(
            //     "index : " + this.index + " swroir: " + this.sumanswer + " ; araswori: " + this.sumNoanswer
            // );
        // console.log("zazaza", this.result);
    }

    correct_answer() {
        console.log("correct", this.index + 1);
        this.index++, this.index > 7 && this.sumanswer++;
    }

    incorrect_answer() {
        console.log("incorrect", this.index + 1);
        this.index++, this.index > 7 && this.sumNoanswer++;
    }

    result_payer() {
        console.log("zazaza payer", this.index);

        (this.result = "работать по найму"), "" == this.finalResult && (this.finalResult = this.result);
    }

    result_service() {
        console.log("zazaza service", this.index);
        (this.result = "услуги"), "" == this.finalResult && (this.finalResult = this.result);
    }
    show_personal_popup() {
        console.info("POPUP", this.result, this.sumNoanswer);
    }
}

const qq = require("./rsru.json");
const a = new Answerer();
for (const q of qq) {
    // console.log(q.QUESTION_ID, q.answer);
    a.processOne(q.answer ? "yes" : "no");
}
