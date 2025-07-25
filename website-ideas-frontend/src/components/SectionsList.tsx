import React from 'react';

interface Section {
  name: string;
  content: string;
}

interface SectionsListProps {
  sections: Section[];
}

const SectionsList: React.FC<SectionsListProps> = ({ sections }) => {
  return (
    <div className="section-list">
      <h2>Website Preview</h2>

      <div className="browser-frame">
        {/* Browser header */}
        <div className="browser-bar">
          <div className="browser-buttons">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="browser-url">https://my-generated-site.com</div>
        </div>

        {/* Website content area */}
        <div className="webpage-content">
          {sections.length === 0 ? (
            <p style={{ color: '#888', textAlign: 'center', padding: '2rem' }}>
              No sections available. Submit an idea to generate sections.
            </p>
          ) : (
            sections.map((section, idx) => (
              <div className="section" key={idx}>
                <h3>{section.name}</h3>
                <p>{section.content}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .browser-frame {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin-top: 1rem;
          background: white;
        }

        .browser-bar {
          background: #f1f1f1;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          border-bottom: 1px solid #ccc;
        }

        .browser-buttons {
          display: flex;
          gap: 0.4rem;
          padding-left: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }

        .red {
          background: #ff5f56;
        }

        .yellow {
          background: #ffbd2e;
        }

        .green {
          background: #27c93f;
        }

        .browser-url {
          flex-grow: 1;
          text-align: center;
          color: #555;
        }

        .webpage-content {
          padding: 1.5rem;
        }

        .section {
          margin-bottom: 2rem;
        }

        .section h3 {
          margin: 0 0 0.5rem;
          color: #333;
        }

        .section p {
          margin: 0;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default SectionsList;
