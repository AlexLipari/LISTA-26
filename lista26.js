let Livros = []
class Livro {
    Titulo
    Autora
    Editora
    AnoDePublicacao
    Disponibilidade
}
let livroUm = new Livro()
livroUm.Titulo = "Biografia 1"
livroUm.Autora = "Bianca"
livroUm.Editora = "Compacta"
livroUm.AnoDePublicacao = 1998
livroUm.Disponibilidade = false
Livros.push(livroUm)

let livroDois = new Livro()
livroDois.Titulo = "Biografia 2"
livroDois.Autora = "Luana"
livroDois.Editora = "Asa Branca"
livroDois.AnoDePublicacao = 2002
livroDois.Disponibilidade = true
Livros.push(livroDois)

let livroTres = new Livro()
livroTres.Titulo = "Biografia 3"
livroTres.Autora = "Sara"
livroTres.Editora = "Carinhosa"
livroTres.AnoDePublicacao = 2004
livroTres.Disponibilidade = true
Livros.push(livroTres)

class Biblioteca {
    NomeBiblioteca
    Endereco
    Telefone
    BuscarLivroNome(nomeParametro) {
        let nome = Livros.filter(x => x.Titulo == nomeParametro)
        console.log(nome)
    }
    EmprestimoLivroNome(nomeParametro) {
        let emprestimo = Livros.filter(x => {
            if (x.Titulo == nomeParametro) {
                if (x.Disponibilidade == true) {
                    x.Disponibilidade = false
                    return true
                } else {
                    return false
                }
            }
        })
        console.log(emprestimo)
    }
    DevolucaoLivro(nomeParametro) {
        let devolver = Livros.filter(x => {
            if (x.Titulo == nomeParametro) {
                if (x.Disponibilidade == false)
                    x.Disponibilidade = true
                return true
            }
        })
        console.log(devolver)
    }
}
let biblioteca = new Biblioteca()
biblioteca.NomeBiblioteca = "Lipari"
biblioteca.Endereco = "Tatuapé"
biblioteca.Telefone = 994950000
biblioteca.BuscarLivroNome("Biografia 2")
biblioteca.EmprestimoLivroNome("Biografia 3")
biblioteca.DevolucaoLivro("Biografia 1")


