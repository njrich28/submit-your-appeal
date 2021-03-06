module.exports = {

    session: {
        createSession:              '/create-session',
        entry:                      '/',
        exit:                       'exit',
        sessions:                   '/sessions'
    },

    start: {
        benefitType:                '/benefit-type'
    },

    compliance: {
        cantAppeal:                 '/cant-appeal',
        checkMRNDate:               '/check-mrn-date',
        contactDWP:                 '/contact-dwp',
        mrnDate:                    '/mrn-date',
        mrnOverMonthLate:           '/mrn-over-month-late',
        mrnOverThirteenMonthsLate:  '/mrn-over-thirteen-months-late',
        noMRN:                      '/no-mrn'
    },

    identity: {
        appointee:                  '/are-you-an-appointee',
        enterAppellantDetails:      '/enter-appellant-details',
        enterAppointeeDetails:      '/enter-appointee-details'
    },

    smsNotify: {
        enterMobile:                 '/enter-mobile',
        sendToNumber:                '/send-to-number',
        smsConfirmation:             '/sms-confirmation',
        appellantTextReminders:      '/appellant-text-reminders'
    },

    representative: {
        representative:             '/representative'
    }

};
