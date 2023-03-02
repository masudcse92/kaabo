
  function contactMessage(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJnCCeSltnALG6CNQVP-3MiMi74vjXoKf1gzRc_-iwIeujCkXOPnWvCnzFPoq2LHuS9w/exec'
      const form = document.forms['submit-to-google-sheet']
      const successMessage = document.getElementById('success');
      successMessage;
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            success.innerHTML = "Data successfully message";
            setTimeout(function(){
                success.innerHTML = " ";
            }, 5000)
            form.reset();
          })
          .catch(error => console.error('Error!', error.message))
      })
    
  }

  contactMessage();


function popupToggle(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxJnCCeSltnALG6CNQVP-3MiMi74vjXoKf1gzRc_-iwIeujCkXOPnWvCnzFPoq2LHuS9w/exec';
  const form = document.forms['submit-to-google-sheets'];
  const successMessage = document.getElementById('success');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        success.innerHTML = "Data successfully message";
        setTimeout(function(){
            success.innerHTML = " ";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

}

popupToggle();
