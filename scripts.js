// scripts.js

function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('simpleInterestResult').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const interest = (principal * rate * time) / 100;
    const amount = principal + interest;

    document.getElementById('simpleInterestResult').innerHTML = `Juros Simples: R$ ${interest.toFixed(2)}<br>Total: R$ ${amount.toFixed(2)}`;
}

function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('cPrincipal').value);
    const rate = parseFloat(document.getElementById('cRate').value) / 100;
    const time = parseFloat(document.getElementById('cTime').value);
    const n = parseInt(document.getElementById('nCompounds').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(n)) {
        document.getElementById('compoundInterestResult').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const amount = principal * Math.pow((1 + rate / n), n * time);
    const interest = amount - principal;

    document.getElementById('compoundInterestResult').innerHTML = `Juros Compostos: R$ ${interest.toFixed(2)}<br>Total: R$ ${amount.toFixed(2)}`;
}
