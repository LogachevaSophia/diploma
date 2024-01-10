
export interface question {
    id:number,
    label:string,
    gradient:number,
    answered: boolean,
    value?: any,
}


class CrumblesStore {

    gradient:number = 0;
    allQuestions:Array<question> = []
    currentAnswer: number | null= null;

    setGradient = (gradient: number) =>{
        this.gradient = gradient
    }

    checkAnswer = (idOfAnswer: number, valueOfAnswer: any) =>{
        const index = this.allQuestions.findIndex((el)=> el.id==idOfAnswer);
        this.allQuestions[index].value = valueOfAnswer;
        this.allQuestions[index].answered = true;
    }

    setCurrentAnswer = (idOfAnswer: number)=>{
        this.currentAnswer = idOfAnswer;
    }

    getAllQuestions = () => {
        this.allQuestions = [
            {
                id:1,
                label:"как вы отночитесь к шаурме",
                gradient:5,
                answered: false},
            {
                id:2,
                label:"как вы отночитесь к шаурме2",
                gradient:5,
                answered: false},
            {
                id:3,
                label:"как вы отночитесь к шаурме3",
                gradient:5,
                answered: false},
        ]
        this.setGradient(5);
        console.log(this.allQuestions)
    }




}

const crumblesStore = new CrumblesStore()
export default crumblesStore;