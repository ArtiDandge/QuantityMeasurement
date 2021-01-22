class TemperaturConverter {
    Calculate(value, from, to) {
        if (value == null || from == null || to == null) {
            return null;
        }
        console.log('value: ' + value + '    from: ' + from + '   to: ' + to);
        let celsius = 0;
        switch (to) {
            case 1:
                this.celsius = value;
                return this.celsius;
            case 2:
                this.celsius = value * from;
                return ((this.celsius * 9/5) + 32);
            case 3:
                this.celsius = value * from;
                return (this.celsius + 273.15);
            default:
                return null;
        }
    }
}

export default TemperaturConverter;