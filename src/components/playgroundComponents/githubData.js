import React from 'react'

class githubData extends React.Component {

    state = {
        languages: [
            {
                name: "JavaScript",
                count: 0
            },
            { 
                name: "Ruby",
                count: 0
            },
            { 
                name: "HTML",
                count: 0
            }, 
            { 
                name: "TypeScript",
                count: 0
            },
            { 
                name: "CSS",
                count: 0 
            }
        ]
    }

    componentDidMount() {
        this.dataFetch()
    }

    githubDataP1 = () => fetch("https://api.github.com/user/repos?per_page=100", {
        headers: {
          Authorization: "token 74769b86ebcce2cb704b4be6666c88dba993656d"
        }
      }).then(resp => resp.json())
      
    githubDataP2 = () => fetch("https://api.github.com/user/repos?per_page=100&page=2", {
        headers: {
          Authorization: "token 74769b86ebcce2cb704b4be6666c88dba993656d"
        }
      }).then(resp => resp.json())
      
    githubDataP3 = () => fetch("https://api.github.com/user/repos?per_page=100&page=3", {
        headers: {
          Authorization: "token 74769b86ebcce2cb704b4be6666c88dba993656d"
        }
      }).then(resp => resp.json())
      
    dataFetch = () => {
        this.githubDataP1().then(data => data.map(repo => {
            this.state.languages.map(lang => {
                if (repo.language === lang.name) {
                    this.setState({ languages: {...this.state.languages, count: count+=1} })
                }
            })
        }))
        this.githubDataP2().then(data => data.map(repo => {
            this.state.languages.map(lang => {
                if (repo.language === lang.name) {
                    this.setState({ languages: {...this.state.languages, count: count+=1} })
                }
            })
        }))
        this.githubDataP3().then(data => data.map(repo => {
            this.state.languages.map(lang => {
                if (repo.language === lang.name) {
                    this.setState({ languages: {...this.state.languages, count: count+=1} })
                }
            })
        }))
    }
    
    render() {
        return
    }

}
export default githubData