import React, { useState } from 'react';
import { Send, CheckCircle, Database, RefreshCw, Server, Mail, ShieldAlert } from 'lucide-react';
import { ME } from '../data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('Direct Interview Invite');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Mock server response representation
  const [apiResponse, setApiResponse] = useState<any | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Pre-flight client inputs verification checks
    if (!name || !email || !message) {
      setValidationError('All required input parameters [name, email, message] must be loaded.');
      return;
    }

    if (!email.includes('@') || email.length < 5) {
      setValidationError('Input parameter [email] failed regular expression email assertions.');
      return;
    }

    // Capture potential HTML injections
    if (message.includes('<script>') || message.includes('</script>')) {
      setValidationError('MALICIOUS PAYLOAD FAULT: Cross-site scripting tag blocks initialized. Request blocked.');
      return;
    }

    setSubmitting(true);

    // Simulate database write delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Populate mock REST Response structure
      setApiResponse({
        statusCode: 201,
        status: "Created",
        message: "Telemetry package stored safely in central SQL Server logs.",
        data: {
          clientId: `recruiter-${Math.floor(Math.random() * 9000 + 1000)}`,
          registeredAt: new Date().toISOString(),
          claimsAllocated: ["guest_portfolio_profile_read"],
          schemaMappingId: Math.floor(Math.random() * 500 + 1),
          payloadEcho: {
            senderName: name,
            senderCompany: company || "Undisclosed Entity",
            subjectCategory: subject,
            verificationStatus: "Clean_No_XSS"
          }
        }
      });
    }, 1800);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setSubmitted(false);
    setApiResponse(null);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      
      {/* Visual Header */}
      <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Server className="w-4 h-4 text-emerald-400" />
          <span className="font-display font-semibold text-xs md:text-sm text-slate-200 uppercase tracking-widest">
            REST API Message Handlers Gate
          </span>
        </div>
        <span className="font-mono text-[9px] bg-emerald-950 text-emerald-400 py-1 px-1.5 rounded font-bold">
          ENDPOINT: /api/contact/submit
        </span>
      </div>

      <div className="p-6 md:p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {validationError && (
              <div className="bg-rose-950/40 border border-rose-900/50 p-3 rounded-lg text-rose-300 text-xs flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Sender Name */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs bg-slate-950 border border-slate-800 text-white placeholder-slate-600 rounded-lg p-2.5 outline-none focus:border-indigo-500 hover:border-slate-700 transition"
                />
              </div>

              {/* Sender Email */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Corporate Email *</label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs bg-slate-950 border border-slate-800 text-white placeholder-slate-600 rounded-lg p-2.5 outline-none focus:border-indigo-500 hover:border-slate-700 transition"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Corporate Company */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Acme Business Systems"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full text-xs bg-slate-950 border border-slate-800 text-white placeholder-slate-600 rounded-lg p-2.5 outline-none focus:border-indigo-500 hover:border-slate-700 transition"
                />
              </div>

              {/* Direct Subject */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Interaction Channel Type</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-xs bg-slate-950 border border-slate-800 text-slate-300 rounded-lg p-2.5 outline-none focus:border-indigo-500 hover:border-slate-700 transition"
                >
                  <option value="Direct Interview Invite">💼 Direct Interview Invite</option>
                  <option value="Contract Gig Proposal">⚡ Contract Gig Proposal</option>
                  <option value="System Audit Consulting">🔒 System Security Consulting</option>
                  <option value="General Technical Inquiry">🌐 General Technical Inquiry</option>
                </select>
              </div>

            </div>

            {/* Main Message Block */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Message Content / Scope *</label>
              <textarea
                required
                rows={4}
                placeholder="Hi Mohamed, we reviewed your Training Center API and DVLD workflows and would love to schedule a developer interview session..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs bg-slate-950 border border-slate-800 text-white placeholder-slate-600 rounded-lg p-2.5 outline-none focus:border-indigo-500 hover:border-slate-700 transition resize-none"
              />
            </div>

            {/* Interactive Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 text-white font-display font-semibold text-xs py-3 rounded-lg shadow-lg hover:shadow-indigo-950/30 transition-all flex items-center justify-center space-x-2 active:scale-95 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>TRANSMITTING ADO.NET SQL WRITE COMMANDS...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-indigo-300" />
                  <span>DISPATCH SYSTEM WORKFLOW REQUEST</span>
                </>
              )}
            </button>

          </form>
        ) : (
          
          /* Post Submission Mock API Echo Logs rendering */
          <div className="space-y-6">
            
            <div className="flex flex-col items-center justify-center text-center p-4">
              <CheckCircle className="w-12 h-12 text-emerald-400 mb-2 animate-bounce" />
              <h3 className="font-display font-bold text-base text-slate-100">Message Pipeline Consolidated</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                Payload parsed, cleared security validation metrics, and stored in database.
              </p>
            </div>

            {/* REST Code Response panel */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                JSON REST API Response (201 Created)
              </span>

              <pre className="bg-slate-950 p-4 border border-slate-800 rounded-lg font-mono text-[10px] md:text-xs text-slate-300 leading-normal overflow-x-auto max-h-[220px]">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={resetForm}
                className="flex-1 text-center border border-slate-800 text-slate-400 hover:text-slate-100 font-display text-xs py-2 rounded-lg transition"
              >
                Send Another Message
              </button>
              
              <a
                href={`mailto:${ME.email}`}
                className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-display text-xs py-2 rounded-lg font-semibold transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Direct Email</span>
              </a>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
