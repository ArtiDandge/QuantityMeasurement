class VolumnConverter {
    Calculate(value, from, to) {
        if (value == null || from == null || to == null) {
            return null;
        }
        console.log('value: ' + value + '    from: ' + from + '   to: ' + to);
        let litre = 0;
        switch (to) {
            case 1:
                this.litre = value;
                return this.litre;
            case 2:
                this.litre = value * from;
                return this.litre *1000;
            case 3:
                this.litre = value * from;
                return this.litre / 3.785;
            default:
                return null;
        }
    }
}

export default VolumnConverter;