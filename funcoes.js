module.exports ={
    calcula_idade: function (nascimentoMilisec){
        const Diferenca = Date.now() - nascimentoMilisec
        const age_dt = new Date(Diferenca)
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}
