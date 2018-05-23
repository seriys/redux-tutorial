import React from 'react';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import { toggleFlip } from '../actions'

let Flip = ({active,  onClick }) => {
    return (
        <p>
            <a
                href=""
                onClick={e => {
                    e.preventDefault()
                    onClick()
                }}
            >
                {active ? 'true' : 'false'}
            </a>
        </p>
    )
}

Flip.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    console.debug(state)
    return { active: state.flip }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(toggleFlip())
        }
    }
}

Flip = connect(
    mapStateToProps,
    mapDispatchToProps
)(Flip)

export default Flip
