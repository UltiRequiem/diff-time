import { setup } from "../twind.ts";
import { RenderContext, RenderFn, virtualSheet } from "../server_deps.ts";

const sheet = virtualSheet();

sheet.reset();

setup({ sheet });

export function render(ctx: RenderContext, render: RenderFn) {
  const snapshot = ctx.state.get("twindSnapshot");

  sheet.reset(snapshot ?? undefined);

  render();

  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);

  ctx.state.set("twindSnapshot", sheet.reset());
}
