const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion();
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
   setNextQuestion();
}

function setNextQuestion() {
   resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: ' Hoa tượng trưng cho mùa xuân ở miền Trung & Nam?',
    answers: [
      { text: 'Hoa đào', correct: false },
      { text: 'Hoa cúc', correct: false },
      { text: 'Hoa mai', correct: true },
      { text: 'Hoa vạn thọ', correct: false }
    ]
  },
  {
    question: 'Bánh gì đi đứng mệt mỏi?',
    answers: [
      { text: 'Bánh da lợn', correct: false },
      { text: 'Bánh trôi nước', correct: false },
      { text: 'Bánh gai', correct: false },
      { text: 'Bánh bò', correct: true }
    ]
  },
  {
    question: 'Món ăn nào có 5 vị, càng ăn càng say, ăn hoài không no. Đó là món ăn gì',
    answers: [
      { text: 'Thịt kho tàu', correct: false },
      { text: 'Thịt dê cái', correct: false },
      { text: 'Trầu', correct: true },
      { text: 'Bánh xèo', correct: false }
    ]
  },
  {
    question: 'Dù ai đi ngược về xuôi, Cũng đều nhớ tới mồng mười tháng ba. Câu ca dao trên có ý nói về ngày lễ hội nào trong tuyền thống của dân tộc Việt Nam',
    answers: [
      { text: 'Têt Hàn thực', correct: false },
      { text: 'Tết Âm lịch', correct: false },
      { text: 'Lễ hội đền Hùng', correct: true },
      { text: 'Lễ kỵ các tộc họ', correct: false}

    ]
  },
  {
    question: 'Con gì đi đâu cũng đều phải vỗ tay?',
    answers: [
      { text: 'Con ruồi', correct: false },
      { text: 'Con gián', correct: false },
      { text: 'Bươm bướm', correct: false },
      { text: 'Con muỗi', correct: true }
    ]
  },
  {
    question: 'Tỉnh nào không có xe đạp?',
    answers: [
      { text: 'Lào Cai', correct: false },
      { text: 'Tiền Giang', correct: false },
      { text: 'Quảng Nam-Đà Nẵng', correct: true },
      { text: 'Sơn La', correct: false }
    ]
  },
  {
    question: 'Thân em vừa trắng lại vừa tròn, Bảy nổi ba chìm với nước non (Hồ Xuân Hương). Bài thơ trên của Hồ Xuân Hương nói đến loại bánh nào ?',
    answers: [
      { text: 'Bánh bò', correct: false },
      { text: 'Bánh pía', correct: false },
      { text: 'Bánh căn', correct: false },
      { text: 'Bánh trôi', correct: true }
    ]
  },
  {
    question: 'Con vật nào gắn bó với hành ảnh của người nông dân Việt Nam?',
    answers: [
      { text: 'Con gà', correct: false },
      { text: 'Con bò', correct: false },
      { text: 'Con cò', correct: false },
      { text: 'Con trâu', correct: true }
    ]
  },
  {
    question: 'Thịt nào là thịt của loại đàn bà có râu?',
    answers: [
      { text: 'Thịt cừu', correct: false },
      { text: 'Thịt thỏ', correct: false },
      { text: 'Thịt dê cái', correct: true },
      { text: 'thịt dê đực', correct: false }
    ]
  },
  {
    question: 'Sinh ra tên gọi đồng bằng. Vựa lúa lớn nhất của miền Bắc ta. Là ở đâu?',
    answers: [
      { text: 'Đồng bằng sông Cửu Long', correct: false },
      { text: 'Trung du miền núi Bắc Bộ', correct: false },
      { text: 'Đồng bằng Sông Hồng', correct: true },
      { text: 'Trường Sơn Nam,', correct: false }
    ]
  },
  {
    question: 'Trai Đà Lạt, cưới vợ Sài Gòn. Môn đăng hộ đối em còn chê xa. Là quả gì?',
    answers: [
      { text: 'Quýt', correct: false },
      { text: 'Cam', correct: false },
      { text: 'Sầu riêng', correct: false },
      { text: 'Spoche', correct: true }
    ]
  },
  {
    question: 'Sông nào nổi sóng bạc đầu. Ba phen cọc gỗ đâm tàu giặc tan?',
    answers: [
      { text: 'Sông Cái', correct: false },
      { text: 'Sông Hương', correct: false },
      { text: 'Sông Bạch Đằng', correct: true },
      { text: 'Sông Tắc', correct: false }
    ]
  },
  {
    question: 'Đức Giê-su đã làm điều gì khác cho người bại liệt ngoài việc chữa khỏi bệnh ?',
    answers: [
      { text: 'Tha tội cho anh ta', correct: true },
      { text: 'Biến anh ta thành môn đệ', correct: false },
      { text: 'Cho anh ta một ít tiền', correct: false },
      { text: 'Tất cả đều sai', correct: false }
    ]
  },
  {
    question: 'Chúa Giê-su sinh ra tại đâu?',
    answers: [
      { text: 'Ga-li-lê', correct: false },
      { text: 'Giê-ru-sa-lem', correct: false },
      { text: 'Bê-lem', correct: true },
      { text: 'An-ti-ô-ki-a', correct: false }
    ]
  },
  {
    question: 'Thiên Chúa có bao giờ nói rằng Đức Giê-su là Con Yêu Dấu của Người không ?',
    answers: [
      { text: 'Có', correct: true },
      { text: 'Không có', correct: false }
    ]
  },
  {
    question: 'Tin Mừng nào bắt đầu bằng gia phả của Đức Giê-su ?',
    answers: [
      { text: 'Mác-cô', correct: false },
      { text: 'Lu-ca', correct: false },
      { text: 'Gio-an', correct: false },
      { text: 'Mát-thêu', correct: true }
    ]
  },
  {
    question: 'Hãy học cùng Ta. Vì Ta...?',
    answers: [
      { text: 'Khôn ngoan & thánh thiện', correct: false },
      { text: 'Thông thái & hiểu biết', correct: false },
      { text: 'Hiền lành & khiêm nhường', correct: true },
      { text: 'Trọn lành', correct: false }
    ]
  },
  {
    question: 'Chúa Giê-su làm phép lạ đầu tiên tại tiệc cưới miền Ca-na?',
    answers: [
      { text: 'Đúng', correct: true },
      { text: 'Sai', correct: false }
    ]
  },
  {
    question: 'Vua nào chính trực anh hào. Đứng ra lãnh đạo phong trào Cần Vương?',
    answers: [
      { text: 'Tôn Thất Thuyết', correct: false },
      { text: 'Tự Đức', correct: false },
      { text: 'Hàm Nghi', correct: true },
      { text: 'Minh Mạng', correct: false }
    ]
  },
  {
    question: 'Chẳng thủ trưởng, chẳng thủ kho. Cũng thủ nhưng lại chỉ lo giữ thành. Là ai?',
    answers: [
      { text: 'Thủ khoa', correct: false },
      { text: 'Thủ môn', correct: true },
      { text: 'Thủ quỹ', correct: false },
      { text: 'Thủ thỉ', correct: false }
    ]
  },
  {
    question: ' Cây gì cuống lá rộng, to. Quả ngọt chín đỏ, hạt đen no tròn?',
    answers: [
      { text: 'Mãn cầu giai', correct: false },
      { text: 'Nhãn', correct: false },
      { text: 'Táo', correct: false },
      { text: 'Đu đủ', correct: true }
    ]
  },
  {
    question: 'Cây gì không nhánh, thân suông. Bóng che mát rượi, cho đường ta ăn.',
    answers: [
      { text: 'Dừa', correct: false },
      { text: 'Thốt nốt', correct: true },
      { text: 'Mía', correct: false },
      { text: 'Chà là', correct: false }
    ]
  },
  {
    question: 'Quả gì đỏ tựa bông hồng. Trong trắng, có đốm đen trông như mè?',
    answers: [
      { text: 'Đu đủ', correct: false },
      { text: 'Mít', correct: false },
      { text: 'Thanh long', correct: true },
      { text: 'Cam', correct: false }
    ]
  },
  
 
]