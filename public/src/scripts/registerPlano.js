var planoSelect = 0

function registerPlano(plano)
{
    planoSelect = plano;
    document.querySelector('#_body-register_h1').textContent = "PASSO 2 DE 3";
    document.querySelector('#_body-register_plano1').style.display = "none";
    document.querySelector('#_body-register_plano2').style.display = "none";
    document.querySelector('#container-body_register2').style.display = "block";
    document.querySelector('#_body-register_h2').style.display = "none";
    document.querySelector('#_body-register_h3').style.display = "block";
}
