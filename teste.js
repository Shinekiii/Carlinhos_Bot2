const products = [
    {
        name: 'Produto 1',
        image: 'url_para_imagem_do_produto_1',
        price: 10.99
    },
    {
        name: 'Produto 2',
        image: 'url_para_imagem_do_produto_2',
        price: 15.99
    },
    // Adicione mais produtos conforme necessário
];

const productsContainer = document.getElementById('products');

products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productDiv.appendChild(productImage);

    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productDiv.appendChild(productPrice);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';
    buyButton.addEventListener('click', () => openConfirmationMenu(product.name));
    productDiv.appendChild(buyButton);

    productsContainer.appendChild(productDiv);
});

function openConfirmationMenu(productName) {
    const confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation');

    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = `Deseja mesmo comprar ${productName}?`;

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Sim, Comprar';
    confirmButton.addEventListener('click', () => {
        alert(`Compra de ${productName} realizada com sucesso!`);
        confirmationDiv.remove();
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancelar';
    cancelButton.addEventListener('click', () => {
        confirmationDiv.remove();
    });

    confirmationDiv.appendChild(confirmationMessage);
    confirmationDiv.appendChild(confirmButton);
    confirmationDiv.appendChild(cancelButton);

    document.body.appendChild(confirmationDiv);
}

function twitchLogin() {
    // Defina os parâmetros para a autenticação da Twitch
    const client_id = 'ed2iwwf2nnbxievqivcrha43gmt4j1'; // Substitua pelo seu client ID da Twitch
    const redirect_uri = 'https://seusite.com/callback'; // Substitua pela sua URL de callback
    const response_type = 'token';
    const scope = 'user:read:email'; // Especifique os escopos necessários

    // Construa a URL de autenticação da Twitch
    const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

    // Redirecione o usuário para a página de autenticação da Twitch
    window.location.href = authUrl;
}

