const filterWorkitem =  ( { value }, idCase) => {
    return value.filter(c => c.taskName !== 'Event_ReestablecerTimer' && c.taskName !== 'Event_10')
                .map( w => ({
                        idCase,
                        idWorkitem: w.id,
                }))
}

module.exports = { filterWorkitem }