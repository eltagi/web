/** @odoo-module **/

import { Component, onWillUpdateProps, useState } from "@odoo/owl";

export class StageRail extends Component {
    static template = "web_stage_rail.StageRail";
    static props = {
        record: { type: Object },
    };

    setup() {
        this.state = useState({
            stages: this.computeStages(this.props.record),
        });

        onWillUpdateProps((nextProps) => {
            this.state.stages = this.computeStages(nextProps.record);
        });
    }

    get stages() {
        return this.state.stages;
    }

    computeStages(record) {
        const field = record.fields.state;
        if (!field || field.type !== "selection") {
            return [];
        }

        const selection = field.selection || [];
        const currentValue = record.data.state;
        let isCurrentFound = false;

        return selection.map(([key, label]) => {
            const isCurrent = key === currentValue;
            const isDone = !isCurrent && !isCurrentFound;
            if (isCurrent) {
                isCurrentFound = true;
            }
            return { key, label, isCurrent, isDone };
        });
    }
}