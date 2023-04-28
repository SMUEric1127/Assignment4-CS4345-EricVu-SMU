export class TAProfile {
    private static instance: TAProfile;

    // This is made private so that no constructor is avialable
    // So that you get only get the instance through TAProfile.getInstance()
    private constructor (
        public totalApplicationsSubmitted: number
    ) {}

    public static getInstance(totalApplicationsSubmitted: number) {
        if (!TAProfile.instance) {
            TAProfile.instance = new TAProfile(totalApplicationsSubmitted);
        }
        return TAProfile.instance;
    }

    public static increaseApplicationNumber() {
        this.instance.totalApplicationsSubmitted += 1;
        console.log("Increased the total application number by 1, current totalApplication", this.getTotalApplciationNumber());
    }

    public static getTotalApplciationNumber(): number {
        return this.instance.totalApplicationsSubmitted;
    }
}