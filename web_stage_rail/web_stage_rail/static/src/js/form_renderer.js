/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { FormRenderer } from "@web/views/form/form_renderer";
import { StageRail } from "../components/stage_rail/stage_rail";

patch(FormRenderer, {
    components: {
        ...FormRenderer.components,
        StageRail,
    },
    template: "web_stage_rail.FormRenderer",
});