import React from 'react';

import "./Filters.scss"

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: "",
      elementFilters: {
        name: {
          enable: true,
          ascendent: false,
        },
        country: {
          enable: false,
          ascendent: true,
        },
        company: {
          enable: false,
          ascendent: true
        },
        department: {
          enable: false,
          ascendent: true
        },
        admissionDate: {
          enable: false,
          ascendent: true
        },
      }
    }
  }

  filterByName() {
    this.props.updateContacts(
      this.props.contacts.filter((contact) => {
        return contact.name.toUpperCase().includes(this.state.searchBy.toUpperCase());
      })
    )
  }

  showFilters(elementSelected) {
    let newElementsFilters = this.state.elementFilters;
    if(!newElementsFilters[elementSelected].enable) {
      newElementsFilters.name.enable = false;
      newElementsFilters.country.enable = false;
      newElementsFilters.company.enable = false;
      newElementsFilters.department.enable = false;
      newElementsFilters.admissionDate.enable = false;
      newElementsFilters[elementSelected].enable = true;

      newElementsFilters.name.ascendent = true;
      newElementsFilters.country.ascendent = true;
      newElementsFilters.company.ascendent = true;
      newElementsFilters.department.ascendent = true;
      newElementsFilters.admissionDate.ascendent = true;
    } else {
      newElementsFilters[elementSelected].ascendent = newElementsFilters[elementSelected].ascendent ? false : true 
    }

    this.setState({
      elementFilters: newElementsFilters,
      searchBy: "",
    })
  }

  sortBy(atributte) {
    this.showFilters(atributte);

    let newContacts = this.props.contacts.sort((contact1, contact2) => {
      return contact1[atributte] < contact2[atributte] ? -1 : (contact1[atributte] > contact2[atributte] ? 1 : 0);
    })

    if(!this.state.elementFilters[atributte].ascendent) newContacts.reverse();

    this.props.updateContacts(newContacts)
  }

	render() {
		return (
        <div className="container" data-testid="filters">
          <section className="filters">
            <div className="filters__search">
              <input 
                type="text" 
                className="filters__search__input" 
                onChange={(event) => this.setState({searchBy: event.target.value})}
                value={this.state.searchBy} 
                placeholder="Pesquisar" />

              <button onClick={() => this.filterByName()} className="filters__search__icon">
                <i className="fa fa-search"/>
              </button>
            </div>

            { this.state.elementFilters.name.enable ?
              <button onClick={() => this.sortBy("name")} className="filters__item is-selected">
                { this.state.elementFilters.name.ascendent ?
                  <div>Nome <i className="fas fa-sort-down" /> </div> :
                  <div>Nome <i className="fas fa-sort-up" /> </div>
                }
              </button> :
              <button onClick={() => this.sortBy("name")} className="filters__item">
                Nome <i className="fas fa-sort-down" />
              </button>  
            }

            { this.state.elementFilters.country.enable ? 
              <button onClick={() => this.sortBy("country")} className="filters__item is-selected">
                 { this.state.elementFilters.country.ascendent ?
                  <div>País <i className="fas fa-sort-down" /> </div> :
                  <div>País <i className="fas fa-sort-up" /> </div>
                 }
              </button> :
              <button onClick={() => this.sortBy("country")} className="filters__item">
                País <i className="fas fa-sort-down" />
              </button>
            }

            { this.state.elementFilters.company.enable ? 
              <button onClick={() => this.sortBy("company")} className="filters__item is-selected">
                { this.state.elementFilters.company.ascendent ?
                  <div>Empresa <i className="fas fa-sort-down" /> </div> :
                  <div>Empresa <i className="fas fa-sort-up" /> </div>
                 }
              </button> :
              <button onClick={() => this.sortBy("company")} className="filters__item">
                Empresa <i className="fas fa-sort-down" />
              </button>
            }

            { this.state.elementFilters.department.enable ? 
              <button onClick={() => this.sortBy("department")} className="filters__item is-selected">
                { this.state.elementFilters.department.ascendent ?
                  <div>Departamento <i className="fas fa-sort-down" /> </div> :
                  <div>Departamento <i className="fas fa-sort-up" /> </div>
                 }
              </button> :
              <button onClick={() => this.sortBy("department")} className="filters__item">
                Departamento <i className="fas fa-sort-down" />
              </button>
            }

            { this.state.elementFilters.admissionDate.enable ? 
              <button onClick={() => this.sortBy("admissionDate")} className="filters__item is-selected">
                { this.state.elementFilters.admissionDate.ascendent ?
                  <div>Data de admissão <i className="fas fa-sort-down" /> </div> :
                  <div>Data de admissão <i className="fas fa-sort-up" /> </div>
                }
              </button> : 
              <button onClick={() => this.sortBy("admissionDate")} className="filters__item">
                Data de admissão <i className="fas fa-sort-down" />
              </button> 
            }
          </section>
        </div>
		);
  }
  
  
}

export default Filters;
