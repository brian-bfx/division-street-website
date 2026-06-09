/** Hidden field — bots fill it, humans don't see it */
export function HoneypotField() {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input
        type="text"
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
