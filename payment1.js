document.addEventListener("DOMContentLoaded", () => {
    const paymentOption = document.getElementById("payment-option");
    const optionsContainer = document.getElementById("options-container");

    // Define options for each payment method
    const paymentOptions = {
        netbanking: [
            { name: "SBI", logo: "SBI-logo.png" ,link : "https://www.onlinesbi.sbi/"},
            { name: "HDFC", logo: "hdfc-logo.png" , link : "https://netbanking.hdfcbank.com/netbanking/" },
            { name: "ICICI", logo: "icici logo.jpg" , link : "https://www.icicibank.com/personal-banking/insta-banking/internet-banking" },
        ],
        upi: [
            { name: "Google Pay", logo: "Google Pay Logo.png" , link : "https://pay.google.com/intl/en_in/about/" },
            { name: "PhonePe", logo: "Phone Pe Logo.jpg" , link : "https://www.phonepe.com/"},
            { name: "Paytm", logo: "Paytm logo.jpg" , link : "https://www.paytmpayments.com/payment-link"},
            { name: "Amazon Pay", logo: "amazon pay.png" , link : "https://pay.amazon.com/"},
            { name: "Fampay", logo: "fampayLogo.png" , link : "https://www.famapp.in/"},
        ],
        card: [
            { name: "MasterCard", logo: "mastercard logo.jpg" , link : "https://www.mastercard.us/en-us/personal/ways-to-pay/click-to-pay.html"},
            { name: "Visa", logo: "visa logo.png" , link : "https://www.visa.co.in/pay-with-visa/click-to-pay-with-visa.html"},
            { name: "RuPay", logo: "RuPay Logo.png" , link : "https://www.rupay.co.in/"},
        ],
    };

    // Function to update the options container
    function updateOptions(selectedMethod) {
        optionsContainer.innerHTML = ""; // Clear existing options
        if (paymentOptions[selectedMethod]) {
            paymentOptions[selectedMethod].forEach((option) => {
                const div = document.createElement("div");
                div.className = "payment-option";
                div.innerHTML = `
                    <img src="${option.logo}" alt="${option.name}" class="logo">
                    <span><a href = "${option.link}" >${option.name}</a></span>
                `;
                optionsContainer.appendChild(div);
            });
        }
    }

    // Event listener for the payment method dropdown
    paymentOption.addEventListener("change", (e) => {
        updateOptions(e.target.value);
    });
});
