
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
    currentIdQuestion: number | null= null; //id вопроса
    currentItemQuestion: question;// элемент текущий
    currentIndexQuestion: number;// индекс текущего элемента


    setGradient = (gradient: number) =>{
        this.gradient = gradient
    }

    checkAnswer = (idOfAnswer: number, valueOfAnswer: any) =>{
        const index = this.allQuestions.findIndex((el)=> el.id==idOfAnswer);
        this.allQuestions[index].value = valueOfAnswer;
        this.allQuestions[index].answered = true;
    }

    setCurrentAnswer = (idOfAnswer: number)=>{
        this.currentIdQuestion = idOfAnswer;
        const index = this.allQuestions.findIndex(el=> el.id==idOfAnswer)
        this.currentItemQuestion = this.allQuestions[index]
        this.currentIndexQuestion = index;
    }

    getAllQuestions = () => {
        this.allQuestions = [
            {
                id:1,
                label:"как вы относитесь к шаурме",
                gradient:5,
                answered: false},
            {
                id:2,
                label:"как вы относитесь к шаурме2",
                gradient:5,
                answered: false},
            {
                id:3,
                label:"как вы относитесь к шаурме3",
                gradient:5,
                answered: false},
        ]
        this.setGradient(5);
    }




}

const crumblesStore = new CrumblesStore()
export default crumblesStore;