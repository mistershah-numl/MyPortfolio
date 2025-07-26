export default function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Thank You!</h1>
                <p className="text-slate-600 dark:text-slate-300">
                    Your message has been sent. You'll receive a confirmation email, and I'll get back to you within 24 hours.
                </p>
            </div>
        </div>
    )
}