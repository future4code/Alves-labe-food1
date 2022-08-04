export const goToDefault = (navigate) => {
    navigate('/default')
}

export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToSignup = (navigate) => {
    navigate('/cadastro')
}

export const goToAdressSignup = (navigate) => {
    navigate('/cadastro/endereco')
}

export const goToFeed = (navigate) => {
    navigate('/feed')
}

export const goToRestaurants = (navigate, id) => {
    navigate(`/restaurantes/${id}`)
}

export const goToOrderInProgress = (navigate) => {
    navigate('/pedidoEmAndamento')
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToSearch = (navigate) => {
    navigate('/busca')
}

export const goToCart = (navigate) => {
    navigate('/carrinho')
}

export const goToMyProfile = (navigate) => {
    navigate('/perfil')
}

export const goToEditProfile = (navigate) => {
    navigate('/editarPerfil')
}

export const goToEditAddress = (navigate) => {
    navigate('/editarEndereco')
}