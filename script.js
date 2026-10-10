document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultStatus = document.getElementById('result-status');
    const resultDescription = document.getElementById('result-description');
    const resultEmoji = document.getElementById('result-emoji');
    const bountyNumber = document.getElementById('bounty-number');
    const scaleItems = document.querySelectorAll('.scale-item');

    function calculateBMI() {
        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value);

        if (!weight || !height || weight <= 0 || height <= 0) {
            alert("Por favor, insira valores válidos para peso e altura!");
            return;
        }

        // Se o usuário inseriu altura em centímetros (ex: 178 ao invés de 1.78), converte automaticamente
        if (height > 3) {
            height = height / 100;
        }

        const bmi = weight / (height * height);
        updateUI(bmi);
    }

    function updateUI(bmi) {
        let status = "";
        let description = "";
        let emoji = "";
        let bounty = "";
        let activeIndex = 1;

        if (bmi < 18.5) {
            status = `Abaixo do Peso (${bmi.toFixed(1)})`;
            description = "Estilo Brook. Seu corpo está leve como a brisa dos mares, mas cuidado para não ser levado por uma tempestade!";
            emoji = "🦴";
            bounty = "15,000,000";
            activeIndex = 0;
        } else if (bmi >= 18.5 && bmi < 25) {
            status = `Peso Normal (${bmi.toFixed(1)})`;
            description = "Estilo Luffy / Zoro. Condicionamento físico ideal para enfrentar qualquer Almirante na Grand Line!";
            emoji = "💪";
            bounty = "300,000,000";
            activeIndex = 1;
        } else if (bmi >= 25 && bmi < 30) {
            status = `Sobrepeso (${bmi.toFixed(1)})`;
            description = "Estilo Tanque / Jinbe. Força bruta impressionante acumulada para resistir a fortes impactos!";
            emoji = "🛡️";
            bounty = "500,000,000";
            activeIndex = 2;
        } else {
            status = `Obesidade (${bmi.toFixed(1)})`;
            description = "Estilo Yonkou em Bulk. Poder e massa avassaladores comparáveis aos maiores imperadores do Novo Mundo!";
            emoji = "👑";
            bounty = "1,500,000,000";
            activeIndex = 3;
        }

        resultStatus.textContent = status;
        resultDescription.textContent = description;
        resultEmoji.textContent = emoji;
        bountyNumber.textContent = bounty;

        // Atualizar destaque na escala inferior
        scaleItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('active-range');
            } else {
                item.classList.remove('active-range');
            }
        });
    }

    window.fillPreset = function(weight, height) {
        weightInput.value = weight;
        heightInput.value = height;
        calculateBMI();
    };

    calculateBtn.addEventListener('click', calculateBMI);

    // Permitir cálculo ao pressionar Enter nos inputs
    [weightInput, heightInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateBMI();
            }
        });
    });
});