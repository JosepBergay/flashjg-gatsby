import React from "react";
import PropTypes from "prop-types";

const In = ({ ins }) => {
    return (
        <div className="column is-6">
            <h3 className="has-text-weight-semibold">Altas</h3>
            <ul className="menu-list">
                {ins.map(i => (
                    <li key={i.name} className="content box">
                        <h4>{i.name}</h4>
                        <span>
                            {i.location}
                            <br />
                            Fecha incorporación: <strong>{i.firstday}</strong>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Out = ({ outs }) => {
    return (
        <div className="column is-6">
            <h3 className="has-text-weight-semibold">Bajas</h3>
            <ul className="menu-list">
                {outs.map(i => (
                    <li key={i.name} className="content box">
                        <h4>{i.name}</h4>
                        <span>
                            {i.location}
                            <br />
                            Último día: <strong>{i.lastday}</strong>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const InAndOut = ({ inandout }) => {
    const ins = inandout && inandout.in;
    const outs = inandout && inandout.out;
    return (
        <div className="columns content">
            {ins && ins.length ? <In ins={ins} /> : ""}
            {outs && outs.length ? <Out outs={outs} /> : ""}
        </div>
    );
};

InAndOut.propTypes = {
    in: PropTypes.object,
    out: PropTypes.object
};

export default InAndOut;
