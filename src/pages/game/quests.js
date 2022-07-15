console.log("подключено");
// -const blockName = ['Люди', 'Книги', 'Музыка', 'Истории', 'Истории22'];

export const questions = {
  questionsNum: ["1 Вопрос", "2 Вопрос", "3 Вопрос", "4 Вопрос", "5 Вопрос"],

  firstTheme: {
    key: 0, //тема первая
    name: "Люди", //названии темы
    firstQ: {
      //первый вопрос
      text: "Cколько??? первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ первого!", //ответ  вопроса
      type: "img", //тип вопроса, img - картинка, vid - видео, aud - аудио, если ничего - просто текст
      nameContent: "22.png", // в случае img - просто имя файла с расширением, пока хранится в общем каталоге, vid? aud - ссылка на ресурс
    },
    secQ: {
      text: "Cколько???2 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d2!",
      type: "img",
      nameContent: "2.png",
    },
    thrdQ: {
      text: "Cколько???3 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d3!",
      type: "vid",
      nameContent:
        "https://www.youtube.com/embed/2Ia9E-7SaXI?amp&autoplay=1&start=1",
    },
    frthQ: {
      text: "Cколько???4 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d4!",
      type: "img",
      nameContent: "2.png",
    },
    fftQ: {
      text: "Cколько???5NBAAG первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d5!BAAG",
      type: "img",
      nameContent: "2.png",
      bag: true, // bag со значением true, если этот вопрос - кот в мешке
    },
  },
  secondTheme: {
    key: 1,
    name: "Люди2",
    firstQ: {
      text: "Cколько??? первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ первого!",
      type: "img",
      nameContent: "22.png",
    },
    secQ: {
      text: "Cколько???2 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d2!",
      type: "img",
      nameContent: "2.png",
    },
    thrdQ: {
      text: "Cколько???3 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d3!",
      type: "vid",
      nameContent:
        "https://www.youtube.com/embed/2Ia9E-7SaXI?amp&autoplay=1&start=1",
    },
    frthQ: {
      text: "Cколько???4 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d4!",
      type: "img",
      nameContent: "2.png",
    },
    fftQ: {
      text: "Cколько???5NBAAG первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d5!BAAG",
      type: "img",
      nameContent: "2.png",
    },
  },
  thirdTheme: {
    key: 2,
    name: "Люди3",
    firstQ: {
      text: "Cколько??? первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ первого!",
      type: "img",
      nameContent: "22.png",
    },
    secQ: {
      text: "Cколько???2 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d2!",
      type: "img",
      nameContent: "2.png",
    },
    thrdQ: {
      text: "Cколько???3 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d3!",
      type: "vid",
      nameContent:
        "https://www.youtube.com/embed/2Ia9E-7SaXI?amp&autoplay=1&start=1",
    },
    frthQ: {
      text: "Cколько???4 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d4!",
      type: "img",
      nameContent: "2.png",
    },
    fftQ: {
      text: "Cколько???5NBAAG первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d5!BAAG",
      type: "img",
      nameContent: "2.png",
    },
  },
  fourthTheme: {
    key: 3,
    name: "Люди4",
    firstQ: {
      text: "Cколько??? первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ первого!",
      type: "img",
      nameContent: "22.png",
    },
    secQ: {
      text: "Cколько???2 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d2!",
      type: "img",
      nameContent: "2.png",
    },
    thrdQ: {
      text: "Cколько???3 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d3!",
      type: "vid",
      nameContent:
        "https://www.youtube.com/embed/2Ia9E-7SaXI?amp&autoplay=1&start=1",
    },
    frthQ: {
      text: "Cколько???4 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d4!",
      type: "img",
      nameContent: "2.png",
    },
    fftQ: {
      text: "Cколько???5NBAAG первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d5!BAAG",
      type: "img",
      nameContent: "2.png",
    },
  },
  fifthTheme: {
    key: 4,
    name: "Люди5",
    firstQ: {
      text: "Cколько??? первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ первого!",
      type: "img",
      nameContent: "22.png",
    },
    secQ: {
      text: "Cколько???2 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d2!",
      type: "img",
      nameContent: "2.png",
    },
    thrdQ: {
      text: "Cколько???3 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d3!",
      type: "vid",
      nameContent:
        "https://www.youtube.com/embed/2Ia9E-7SaXI?amp&autoplay=1&start=1",
    },
    frthQ: {
      text: "Cколько???4 первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d4!",
      type: "img",
      nameContent: "2.png",
    },
    fftQ: {
      text: "Cколько???5NBAAG первогоперво гопервогоперво гопервогоперв огопервого первогопервого первогопервого первогопервогопервого первогоперво гопервогопервог опервогоперв огопервог опервогопе рвогопервогоп ервого ",
      answer: "ответ d5!BAAG",
      type: "img",
      nameContent: "2.png",
    },
  },
};
