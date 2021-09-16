import React, { Component } from 'react'
import './Tour.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'


export default class Tour extends Component {
    state={
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {

        const{id, city, img, name, info} = this.props.tour
        const{removeTour} = this.props;

        return (
            <article className='tour'>

                <div className='img-container'>
                    <img src={img} alt="building"></img>
                    <span className='close-btn'
                    onClick={()=>{
                        removeTour(id)
                        }}>
                        <FontAwesomeIcon icon={faWindowClose} />
                    </span>
                </div>

                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Info 
                        <span onClick={this.handleInfo}><FontAwesomeIcon icon={faCaretSquareDown} /></span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                    
                </div>
            </article>

        )
    }
}
