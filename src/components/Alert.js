import React from 'react'
import _ from 'lodash'
export default function Alert(props) {

    const capitalize = (word)=>{
        return _.startCase(word);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}

        </div>
    );
}
