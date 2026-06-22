import { useState } from 'react';
import { Shield, Key, RefreshCw, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function InteractiveJWTDecoder() {
  const [role, setRole] = useState<'RecruiterAdmin' | 'GuestUser' | 'MaliciousActor'>('RecruiterAdmin');
  const [expirationTime, setExpirationTime] = useState<string>('Valid (15m remaining)');
  const [triggerReplay, setTriggerReplay] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{
    status: 'success' | 'warning' | 'error' | 'idle';
    title: string;
    description: string;
  }>({
    status: 'idle',
    title: 'Ready for Simulation',
    description: 'Adjust the claims parameters on the right and click "Validate Token Pipeline" to execute.',
  });

  // Derived Token Encoding matching standard JWT format with colored substrings
  const headerBase64 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; // {"alg":"HS256","typ":"JWT"}
  
  // Custom payload JSON representation
  const payloadData = {
    sub: "1234567890",
    name: "Hiring Manager",
    email: "manager@company.com",
    role: role,
    scope: role === 'RecruiterAdmin' ? ["cv:read", "schedule:write", "interview:create"] : role === 'GuestUser' ? ["cv:read"] : ["unauthorized_hijack_attempt"],
    iss: "mohamed-abass-secure-api-auth-center",
    iat: Math.floor(Date.now() / 1000),
    exp: expirationTime === 'Expired' ? Math.floor(Date.now() / 1000) - 3600 : Math.floor(Date.now() / 1000) + 900,
    rtr_lineage_id: "rtr-line-abc-123",
    rtr_sequence: triggerReplay ? "seq-1 (REUSED/STALE)" : "seq-2 (ACTIVE)"
  };

  const payloadBase64Str = btoa(JSON.stringify(payloadData))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .slice(0, 50) + "...[SignClaimSet]";

  const signatureBase64 = "HMACSHA256_32charSignatureHashStringOfHeaderAndPayload";

  // Simulate verification cycle
  const handleVerify = () => {
    if (role === 'MaliciousActor') {
      setFeedbackMessage({
        status: 'error',
        title: 'Authentication Rejected (401 Unauthorized)',
        description: 'Unauthorized Scope Blocked! Bearer rejected because target claims do not match "Trainer" or "Admin" policy roles.',
      });
    } else if (expirationTime === 'Expired') {
      setFeedbackMessage({
        status: 'warning',
        title: 'Token Expired (401 Unauthorized)',
        description: 'Verification failed. Token expired at least 60 minutes ago. Automatic trigger sent to refresh.',
      });
    } else if (triggerReplay) {
      setFeedbackMessage({
        status: 'error',
        title: 'SECURITY BREACH WARNING: Token Replay Intercepted!',
        description: 'Critical Alert! Reused sequence token detected. Refresh Token Rotation (RTR) middleware assumed lineage takeover. Access instantly blocked and all active user token families revoked.',
      });
    } else {
      setFeedbackMessage({
        status: 'success',
        title: 'Verification Succeeded (200 OK)',
        description: `Secure access granted to Mohamed's resume, credentials, and projects under policy rules [cv:read${role === 'RecruiterAdmin' ? ', schedule:write' : ''}].`,
      });
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl" id="jwt-decoder">
      <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-cyan-400" />
          <span className="font-display font-semibold text-sm text-slate-200 tracking-wide">
            Mohamed's Custom JWT & RTR Simulator Sandbox
          </span>
        </div>
        <span className="text-[10px] font-mono bg-slate-800 text-slate-400 py-1 px-2 rounded">
          ASP.NET CORE 9 PIPELINE VERIFIER
        </span>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Token Presentation (40% space on large) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
            Encoded JWT Carrier Format
          </div>

          <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs break-all leading-relaxed border border-slate-800 min-h-[140px] flex flex-col justify-center">
            <span className="text-rose-400 hover:bg-rose-950/20 px-1 rounded transition" title="JWT Header (Algorithm & Token Type)">
              {headerBase64}
            </span>
            <span className="text-slate-500">.</span>
            <span className="text-purple-400 hover:bg-purple-950/20 px-1 rounded transition" title="JWT Claims Payload (User details & lineage)">
              {payloadBase64Str}
            </span>
            <span className="text-slate-500">.</span>
            <span className="text-cyan-400 hover:bg-cyan-950/20 px-1 rounded transition" title="Cryptographical Signature verification segment">
              {signatureBase64}
            </span>
          </div>

          <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-xs space-y-2">
            <div className="flex items-center space-x-2 text-slate-300 font-medium pb-1 border-b border-slate-800/60">
              <Key className="w-3.5 h-3.5 text-cyan-400" />
              <span>Color Segment Key</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded bg-rose-400"></span>
                <span className="text-[10px] text-slate-400">Header</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded bg-purple-400"></span>
                <span className="text-[10px] text-slate-400">Payload</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded bg-cyan-400"></span>
                <span className="text-[10px] text-slate-400">Signature</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Interactive JSON Decoded Payload */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
            Decoded Payload Context
          </div>

          <div className="bg-slate-950 rounded-lg p-4 font-mono text-[11px] border border-slate-800 flex-1 overflow-y-auto">
            <div className="text-slate-500">&emsp;&#123;</div>
            <div className="text-slate-300">
              &emsp;&emsp;<span className="text-rose-400">"sub"</span>: <span className="text-green-300">"1234567890"</span>,
            </div>
            <div className="text-slate-300">
              &emsp;&emsp;<span className="text-rose-400">"name"</span>: <span className="text-green-300">"Hiring Manager"</span>,
            </div>
            <div className="text-slate-300">
              &emsp;&emsp;<span className="text-rose-400">"email"</span>: <span className="text-green-300">"manager@company.com"</span>,
            </div>
            <div className="text-slate-300 animate-pulse bg-slate-900/40">
              &emsp;&emsp;<span className="text-purple-400">"role"</span>: <span className="text-green-300">"{role}"</span>,
            </div>
            <div className="text-slate-300">
              &emsp;&emsp;<span className="text-rose-400">"scope"</span>: [
              {payloadData.scope.map((s, idx) => (
                <span key={idx} className="text-emerald-300">
                  {idx > 0 && ", "}"{s}"
                </span>
              ))}
              ],
            </div>
            <div className="text-slate-300">
              &emsp;&emsp;<span className="text-rose-400">"iss"</span>: <span className="text-green-300">"mohamed-abass-auth"</span>,
            </div>
            <div className="text-slate-300 bg-slate-900/20">
              &emsp;&emsp;<span className="text-rose-400">"exp"</span>: <span className="text-amber-300">{payloadData.exp}</span> <span className="text-slate-500">({expirationTime})</span>,
            </div>
            <div className="text-slate-300">
              &emsp;&emsp;<span className="text-rose-400">"rtr_lineage"</span>: <span className="text-cyan-300">"{payloadData.rtr_lineage_id}"</span>,
            </div>
            <div className={`text-slate-300 rounded ${triggerReplay ? 'bg-amber-950/40 font-bold px-1' : ''}`}>
              &emsp;&emsp;<span className="text-rose-400">"rtr_seq"</span>: <span className={triggerReplay ? 'text-rose-300' : 'text-green-300'}>"{payloadData.rtr_sequence}"</span>
            </div>
            <div className="text-slate-500">&emsp;&#125;</div>
          </div>
        </div>

        {/* Right Column: Interaction Controls & Feedback Panel */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
              Simulation Toggles
            </div>

            {/* Custom role toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 block">System Claim Role</label>
              <div className="grid grid-cols-1 gap-1">
                {(['RecruiterAdmin', 'GuestUser', 'MaliciousActor'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRole(r);
                      if (r === 'MaliciousActor') {
                        setTriggerReplay(false);
                      }
                    }}
                    className={`text-[11px] text-left p-1.5 rounded transition ${
                      role === r
                        ? 'bg-cyan-950 border border-cyan-700/60 text-cyan-300 font-medium'
                        : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                    }`}
                  >
                    {r === 'RecruiterAdmin' ? '💼 Recruiter Admin' : r === 'GuestUser' ? '👀 Guest License Viewer' : '🚨 Malicious Intruder'}
                  </button>
                ))}
              </div>
            </div>

            {/* Token Exceeded */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 block">Token Lifespan Status</label>
              <div className="flex space-x-1.5">
                {['Valid (15m remaining)', 'Expired'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setExpirationTime(status)}
                    className={`flex-1 text-[10px] text-center p-1.5 rounded transition ${
                      expirationTime === status
                        ? 'bg-cyan-950 border border-cyan-800/50 text-cyan-300 font-medium'
                        : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {status === 'Expired' ? '⏰ Expired' : '✅ Active'}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Replay Attack Trigger */}
            {role !== 'MaliciousActor' && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setTriggerReplay(!triggerReplay)}
                  className={`w-full flex items-center justify-between text-xs p-2 rounded-lg border transition ${
                    triggerReplay
                      ? 'bg-rose-950/50 border-rose-800 text-rose-300'
                      : 'bg-slate-950/30 border-slate-800 text-slate-400 hover:text-slate-300'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <AlertTriangle className={`w-3.5 h-3.5 ${triggerReplay ? 'animate-bounce text-rose-400' : 'text-slate-500'}`} />
                    <span>Token Replay Hijack</span>
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${triggerReplay ? 'bg-rose-900/60 text-rose-200' : 'bg-slate-800 text-slate-500'}`}>
                    {triggerReplay ? 'ARMED' : 'OFF'}
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={handleVerify}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-display font-medium text-xs py-2 px-3 rounded-lg shadow-lg hover:shadow-cyan-950/30 transition-all font-semibold active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Validate Token Pipeline</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sandbox Evaluation Output Message Panel */}
      <div className="bg-slate-950 p-4 border-t border-slate-800/80">
        <div className="flex space-x-3 items-start">
          <div className="mt-0.5">
            {feedbackMessage.status === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
            {feedbackMessage.status === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
            {feedbackMessage.status === 'error' && <AlertTriangle className="w-5 h-5 text-rose-500" />}
            {feedbackMessage.status === 'idle' && <HelpCircle className="w-5 h-5 text-slate-400" />}
          </div>
          <div>
            <div className={`text-xs font-semibold ${
              feedbackMessage.status === 'success' ? 'text-emerald-400' :
              feedbackMessage.status === 'warning' ? 'text-amber-400' :
              feedbackMessage.status === 'error' ? 'text-rose-400' : 'text-slate-300'
            }`}>
              {feedbackMessage.title}
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              {feedbackMessage.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
