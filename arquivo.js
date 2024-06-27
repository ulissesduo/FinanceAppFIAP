document.addEventListener('DOMContentLoaded', function() {
    const submitButtons = document.querySelectorAll('.submitButton');
   
    function submitForm(event) {
        event.preventDefault(); 
        if(confirmSubmit() == true){
            alert('Formulário enviado com sucesso!!');
           
            clearFields();
        } else {
            alert("Envio falhou!!");
        }
    }
    
    submitButtons.forEach(button => {
        button.addEventListener('click', submitForm);
    });

    function confirmSubmit(){
        var confirmation = confirm("Você tem certeza que as informações estão corretas?");
        return confirmation;
    }
   
    function clearFields() {       
        document.getElementById('newExpense').value = '';
        document.getElementById('description').value = '';       
        document.getElementById('expenses').value = '';
        document.getElementById('dateinput').value = '';
        document.getElementById('parcelamento').value = '';
        document.getElementById("files").value = null;
        var categoria = document.getElementById('category');

        for(var i = 0; i < categoria.length; i++){
            if(categoria.options[i].selected){
                categoria.options[i].selected = false;
            }
        };
    }
});
