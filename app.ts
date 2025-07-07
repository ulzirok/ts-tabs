const tabButtons = document.querySelectorAll('.tab-btn') as NodeListOf<HTMLButtonElement>
const tabContents = document.querySelectorAll('.tab-content') as NodeListOf<HTMLElement>

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab
    
    tabButtons.forEach((btn) => {
      btn.classList.remove('active')
    })
    
    tabContents.forEach((content) => {
      content.classList.remove('active')
    })
    
    button.classList.add('active')
    
    const targetContent = document.getElementById(tabId!)
    
    if (targetContent) {
      targetContent.classList.add('active')
    }
    
  })
})