const Family = {
	DrukText: "DrukText",
	Montserrat: "Montserrat",
} as const;

const Weight = {
	ExtraBold: "800",
	Bold: "700",
	SemiBold: "600",
	Medium: "500",
	Regular: "400",
} as const;

const Spacing = {
	Hard: "-0.05em",
	Normal: "-0.02em",
	Small: "-0.01em",
	Null: "0",
} as const;

type EField<T extends object> = T[keyof T];
type EFamily = EField<typeof Family>;
type EWeight = EField<typeof Weight>;
type ESpacing = EField<typeof Spacing>;

const Fonts = {
	dgf: createFont(62, 78, Family.DrukText, Weight.Medium, Spacing.Normal),
};

export default Fonts;

function createFont(fontSize: number, lineHeight: number, fontFamily: EFamily, fontWeight: EWeight, letterSpacing: ESpacing) {
	return { fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, fontFamily, fontWeight, letterSpacing };
}
